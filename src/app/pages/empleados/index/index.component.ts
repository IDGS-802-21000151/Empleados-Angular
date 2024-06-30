import { Component } from '@angular/core';
import { EmpleadosService } from '../empleados.service';
import { Empleado } from '../interface/empleado';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  constructor(
    private empleadosService: EmpleadosService,
    private router: Router
  ) {
  }

  // Recuperamos la lista através del servicio
  get _empleados(): Empleado[] {
    return this.empleadosService.getEmpleados()
  }

  redirigirAgregarEmpleado() {
    this.router.navigate(['empleados/agregar'])
  }

  redirigirEditarEmpleado(index: number) {
    this.router.navigate(['empleados/editar/' + index])
  }

  eliminarEmpleado(index: number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: `Estás a punto de eliminar al empleado?. Esta acción no se puede deshacer.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Eliminado',
          `El empleado ${this._empleados[index].nombre} ha sido eliminado correctamente.`,
          'success'
        );

        this.empleadosService.eliminarEmpleado(index)
      }
    });
  }
}

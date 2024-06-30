import { Component } from '@angular/core';
import { EmpleadosService } from '../empleados.service';
import { Empleado } from '../interface/empleado';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  constructor(private empleadosService: EmpleadosService,
    private router: Router
  ) { }

  nuevoEmpleado: Empleado = {
    numeroEmpleado: "",
    nombre: "",
    correo: "",
    telefono: "",
    fechaNacimiento: null,
    sexo: ""
  }

  agregar(event: Event) {
    event.preventDefault()

    if (this.nuevoEmpleado.numeroEmpleado == "") {
      return;
    }

    if (this.nuevoEmpleado.nombre == "") {
      return;
    }

    if (this.nuevoEmpleado.correo == "") {
      return;
    }

    if (this.nuevoEmpleado.telefono == "") {
      return;
    }

    if (this.nuevoEmpleado.fechaNacimiento == null) {
      return;
    }

    if (this.nuevoEmpleado.sexo == "") {
      return;
    }

    this.empleadosService.agregarEmpleado(this.nuevoEmpleado)

    this.router.navigate(['empleados'])
  }
}

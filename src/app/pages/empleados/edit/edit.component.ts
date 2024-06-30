import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadosService } from '../empleados.service';
import { Empleado } from '../interface/empleado';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  index: number = 0;
  empleadoEditado: Empleado = {
    numeroEmpleado: "",
    nombre: "",
    correo: "",
    telefono: "",
    fechaNacimiento: null,
    sexo: ""
  }

  constructor(private route: ActivatedRoute,
    private router: Router,
    private empleadosService: EmpleadosService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.index = +params['index'];
    });

    this.empleadoEditado = this.empleadosService.obtenerEmpleado(this.index)

    console.log(this.empleadoEditado);
    
  }

  editar(event: Event) {
    event.preventDefault()

    if (this.empleadoEditado.numeroEmpleado == "") {
      return;
    }

    if (this.empleadoEditado.nombre == "") {
      return;
    }

    if (this.empleadoEditado.correo == "") {
      return;
    }

    if (this.empleadoEditado.telefono == "") {
      return;
    }

    if (this.empleadoEditado.fechaNacimiento == null) {
      return;
    }

    if (this.empleadoEditado.sexo == "") {
      return;
    }

    this.empleadosService.editarEmpleado(this.empleadoEditado, this.index)

    this.router.navigate(['empleados'])
  }
}

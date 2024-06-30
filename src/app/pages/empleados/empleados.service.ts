import { Injectable } from '@angular/core';
import { Empleado } from './interface/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  private _empleados: Empleado[] = []

  // Para no dejar la variable no privada, creamos un método para obtener esta variable
  public getEmpleados(): Empleado[] {
    return this._empleados
  }

  public agregarEmpleado(nuevoEmpleado: Empleado) {
    this._empleados.push(nuevoEmpleado)

    localStorage.setItem('empleados', JSON.stringify(this._empleados))
  }

  public editarEmpleado(empleadoEditado: Empleado, index: number) {
    this._empleados[index] = empleadoEditado

    localStorage.setItem('empleados', JSON.stringify(this._empleados))
  }

  public obtenerEmpleado(index: number) {
    return this._empleados[index]
  }

  public eliminarEmpleado(index: number) {
    this._empleados.splice(index, 1);

    localStorage.setItem('empleados', JSON.stringify(this._empleados))
  }

  constructor() {
    this._empleados = JSON.parse(localStorage.getItem('empleados') ?? '[]')

    console.log(this._empleados);

  }
}

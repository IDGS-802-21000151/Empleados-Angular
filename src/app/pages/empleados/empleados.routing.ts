import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { NgModule } from '@angular/core';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'agregar',
    component: CreateComponent
  },
  {
    path: 'editar/:index', // Ruta para editar un empleado con un parámetro dinámico :index
    component: EditComponent // Asegúrate de tener un componente de edición adecuado
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EmpleadosRouting { }
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'empleados',
        loadChildren: () => import('./pages/empleados/empleados.routing').then(m => m.EmpleadosRouting)
    }
];

import { Routes } from '@angular/router';
import { GestionUsuario } from './page/gestion-usuario/gestion-usuario';
import { GestionMision } from './page/gestion-mision/gestion-mision';

export const routes: Routes = [
    { path: 'gestion-usuario', component: GestionUsuario },
    { path: 'gestion-mision', component: GestionMision },
    { path: '', redirectTo: '/gestion-usuario', pathMatch: 'full' },
];

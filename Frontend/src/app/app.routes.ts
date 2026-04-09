import { Routes } from '@angular/router';
import { GestionUsuario } from './page/gestion-usuario/gestion-usuario';

export const routes: Routes = [
    { path: 'gestion-usuario', component: GestionUsuario },
    { path: '', redirectTo: '/gestion-usuario', pathMatch: 'full' },
];

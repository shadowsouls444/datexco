import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Usuario } from '../../../data/interface/usuario';

@Component({
  selector: 'app-list-usuario',
  imports: [CommonModule],
  templateUrl: './list-usuario.html',
  standalone: true,
  styleUrl: './list-usuario.css',
})
export class ListUsuario {

  @Input() ListaUsuarios: Usuario[] = [];

}

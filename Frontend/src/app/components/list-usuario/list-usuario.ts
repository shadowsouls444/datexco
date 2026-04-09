import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Usuario } from '../../../data/interface/usuario';

@Component({
  selector: 'app-list-usuario',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './list-usuario.html',
  styleUrl: './list-usuario.css',
})
export class ListUsuario {

  @Input() usuarios: Usuario[] = [];

}

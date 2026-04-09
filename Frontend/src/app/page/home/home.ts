import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormMision } from '../../components/form-mision/form-mision';
import { FormUsuario } from '../../components/form-usuario/form-usuario';
import { ListUsuario } from '../../components/list-usuario/list-usuario';
import { UsuarioService } from '../../../data/service/usuario-service';
import { MisionService } from '../../../data/service/mision-service';
import { Usuario } from '../../../data/interface/usuario';
import { Mision } from '../../../data/interface/mision';

@Component({
  selector: 'app-home',
  imports: [FormUsuario, ListUsuario],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  cdr = inject(ChangeDetectorRef);
  usuarioService = inject(UsuarioService);
  misionService = inject(MisionService);

  usuarios: Usuario[] = [];
  misiones: Mision[] = [];

  ngOnInit() {
    console.log("HOME INIT");
    this.cargarUsuarios();
    this.cargarMisiones();
  }

  cargarUsuarios() {
    this.usuarioService.getUsuarios().subscribe({
      next: (data) => {
        this.usuarios = data;
        this.cdr.detectChanges();
      },
      error: (error) => {
        alert('Error al cargar usuarios');
        console.error('Error al cargar usuarios:', error);
      }
    })
  }

  cargarMisiones() {
    this.misionService.getMisiones().subscribe({
      next: (data) => {
        this.misiones = data;
        this.cdr.detectChanges();
      },
      error: (error) => {
        alert('Error al cargar misiones');
        console.error('Error al cargar misiones:', error);
      }
    })
  }

  registrarUsuario(usuario: Usuario) {
    this.usuarioService.createUsuario(usuario).subscribe({
      next: () => {
        alert('Usuario registrado exitosamente');
        this.usuarios.push(usuario);
        this.cdr.detectChanges();
      },
      error: (error) => {

        if (error.status === 409) {
          alert(error.error.error);
          return;
        }

        alert('Error al registrar usuario');
        console.error('Error al registrar usuario:', error);
      }
    })
  }

}

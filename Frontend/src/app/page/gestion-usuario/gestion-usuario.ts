import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Usuario } from '../../../data/interface/usuario';
import { UsuarioService } from '../../../data/service/usuario-service';
import { FormUsuario } from '../../components/form-usuario/form-usuario';
import { ListUsuario } from '../../components/list-usuario/list-usuario';

@Component({
  selector: 'app-gestion-usuario',
  imports: [FormUsuario, ListUsuario],
  templateUrl: './gestion-usuario.html',
  styleUrl: './gestion-usuario.css',
})
export class GestionUsuario {

  cdr = inject(ChangeDetectorRef);
  usuarioService = inject(UsuarioService);

  usuarios: Usuario[] = [];

  ngOnInit() {
    this.cargarUsuarios();
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

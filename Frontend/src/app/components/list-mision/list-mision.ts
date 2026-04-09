import { ChangeDetectorRef, Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mision } from '../../../data/interface/mision';
import { UsuarioService } from '../../../data/service/usuario-service';
import { Usuario } from '../../../data/interface/usuario';
import { MisionService } from '../../../data/service/mision-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-mision',
  imports: [CommonModule, FormsModule],
  templateUrl: './list-mision.html',
  styleUrl: './list-mision.css',
})
export class ListMision {

  private usuarioService = inject(UsuarioService);
  private misionService = inject(MisionService);

  private cdr = inject(ChangeDetectorRef);

  usuarios: Usuario[] = [];
  usuario_id: number = 0;

  @Input() listaMisiones: Mision[] = [];

  ngOnInit() {
    this.cargarUsuarios();
  }

  trackById(index: number, mision: Mision) {
    return mision.id;
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

  asignarMision(mision: Mision, usuarioId: number) {

    console.log("Mision:", mision);
    console.log("ID:", mision.id);

    if (!usuarioId) {
      alert('Por favor, selecciona un usuario para asignar la misión.');
      return;
    }

    this.misionService.asignarMision(mision.id, usuarioId).subscribe({

      next: (data) => {

        const index = this.listaMisiones.findIndex(m => m.id === data.id);

        if (index !== -1) {
          this.listaMisiones[index] = data;
        }

        alert('Misión asignada exitosamente');

        this.cdr.detectChanges();
      },
      error: (error) => {
        alert('Error al cargar usuarios');
        console.error('Error al cargar usuarios:', error);
      }
    })

  }

}

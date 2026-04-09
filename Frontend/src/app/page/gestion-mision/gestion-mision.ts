import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Mision } from '../../../data/interface/mision';
import { MisionService } from '../../../data/service/mision-service';
import { FormMision } from '../../components/form-mision/form-mision';
import { ListMision } from '../../components/list-mision/list-mision';

@Component({
  selector: 'app-gestion-mision',
  imports: [FormMision, ListMision],
  templateUrl: './gestion-mision.html',
  styleUrl: './gestion-mision.css',
})
export class GestionMision {

  misionService = inject(MisionService);
  cdr = inject(ChangeDetectorRef);

  misiones: Mision[] = [];

  ngOnInit() {
    this.cargarMisiones();
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
  
    registrarMision(mision: Mision) {
      this.misionService.createMision(mision).subscribe({
        next: () => {
          alert('Mision registrada exitosamente');
          this.misiones.push(mision);
          this.cdr.detectChanges();
        },
        error: (error) => {
          alert('Error al registrar mision');
          console.error('Error al registrar mision:', error);
        }
      })
    }

}

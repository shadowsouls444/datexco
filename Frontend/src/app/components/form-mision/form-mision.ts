import { ChangeDetectorRef, Component, EventEmitter, inject, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Form, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Mision } from '../../../data/interface/mision';
import { IARequest } from '../../../data/interface/ia';
import { IaService } from '../../../data/service/ia-service';

@Component({
  selector: 'app-form-mision',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './form-mision.html',
  standalone: true,
  styleUrl: './form-mision.css',
})
export class FormMision {

  private fb = inject(FormBuilder);
  private iaService = inject(IaService);
  private cdr = inject(ChangeDetectorRef);

  @Output() mision = new EventEmitter<Mision>();

  ngOnInit() {
    this.crearFormulario();
  }

  formulario!: FormGroup;

  crearFormulario() {
    this.formulario = this.fb.group({
      titulo: ['', [Validators.required, Validators.maxLength(150), Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/)]],
      descripcion: ['', [Validators.required, Validators.maxLength(600)]],
      mensaje_invitacion: ['', [Validators.required, Validators.maxLength(300)]],
    });
  }

  generarRespuestaIA(tipo: "mensaje_invitacion" | "descripcion") {

    if (tipo === 'descripcion' && this.formulario.get('descripcion')?.value == '') {
      alert('Para mejorar la descripción, por favor ingresa una descripción inicial.');
      return;
    }

    const data: IARequest = {
      texto: this.formulario.get(tipo)?.value,
      tipo: tipo
    };

    this.iaService.generarTexto(data).subscribe({
      next: (data) => {

        data.respuesta = data.respuesta.replace(/\*/g, '');

        this.formulario.get(tipo)?.setValue(data.respuesta);
        this.cdr.detectChanges();
      },
      error: (error) => {
        alert('Error al generar respuesta con IA');
        console.error('Error al generar descripción con IA:', error);
      }
    })

  }

  crearMision() {

    if (this.formulario.valid) {

      const nuevaMision: Mision = this.formulario.value;

      this.mision.emit(nuevaMision);
      this.formulario.reset();

    } else {
      alert("Datos incorrectos")
    }

  }

}

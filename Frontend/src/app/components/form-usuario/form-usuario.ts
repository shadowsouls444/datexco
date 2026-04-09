import { Component, EventEmitter, inject, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Form, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuarioService } from '../../../data/service/usuario-service';
import { Usuario } from '../../../data/interface/usuario';

@Component({
  selector: 'app-form-usuario',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './form-usuario.html',
  styleUrl: './form-usuario.css',
})
export class FormUsuario {

  usuarioService = inject(UsuarioService);
  private fb = inject(FormBuilder);

  @Output() usuario = new EventEmitter<Usuario>();

  ngOnInit() {
    this.crearFormulario();
  }

  formulario!: FormGroup;

  crearFormulario() {
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(20), Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(90)]],
      telefono: ['', [Validators.required, Validators.maxLength(10), Validators.pattern(/^[0-9]+$/)]],
      identificacion: ['', [Validators.required, Validators.maxLength(10), Validators.pattern(/^[0-9]+$/)]]
    });
  }

  crearUsuario() {

    if (this.formulario.valid) {

      const nuevoUsuario: Usuario = this.formulario.value;

      this.usuario.emit(nuevoUsuario);

    } else {
      alert("Datos incorrectos")
    }

  }

}

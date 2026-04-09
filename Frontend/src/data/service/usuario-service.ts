import { Injectable, inject } from '@angular/core';
import { Usuario } from '../interface/usuario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {

  private http = inject(HttpClient)
  apiUrl = 'http://localhost:3000/usuarios';

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }

  createUsuario(usuario: Usuario): Observable<any>{
    return this.http.post(this.apiUrl, usuario);
  }

}

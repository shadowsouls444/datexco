import { Injectable, inject } from '@angular/core';
import { Mision } from '../interface/mision';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MisionService {

  private http = inject(HttpClient)
  apiUrl = 'http://localhost:3000/misiones';

  getMisiones(): Observable<Mision[]> {
    return this.http.get<Mision[]>(this.apiUrl);
  }

  createMision(mision: Mision): Observable<any>{
    return this.http.post(this.apiUrl, mision);
  }

  asignarMision(misionId: number, usuarioId: number): Observable<Mision> {
    return this.http.patch<Mision>(`${this.apiUrl}/${misionId}`, { usuario_id: usuarioId });
  }

}

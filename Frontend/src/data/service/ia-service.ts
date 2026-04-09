import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IARequest, IAResponse } from '../interface/ia';

@Injectable({
  providedIn: 'root',
})
export class IaService {

  private http = inject(HttpClient);
  apiUrl = 'http://localhost:3000/ai';

  generarTexto(data: IARequest): Observable<IAResponse> {
    return this.http.post<IAResponse>(this.apiUrl, data);
  }
}

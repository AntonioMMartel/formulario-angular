import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ApiHuevosService {
  hostname =
    document.location.protocol +
    '//' +
    document.location.hostname +
    ':3000/huevos';
  constructor(private http: HttpClient) {}

  postHuevo(data: any) {
    console.log();
    return this.http.post<any>(this.hostname, data);
  }

  getAllHuevos() {
    return this.http.get<any>(this.hostname);
  }

  updateHuevo(data: any, id: number) {
    return this.http.put<any>(this.hostname + '/' + id, data);
  }

  deleteHuevo(id: number) {
    return this.http.delete<any>(this.hostname + '/' + id);
  }
}

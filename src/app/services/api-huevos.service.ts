import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ApiHuevosService {
  constructor(private http: HttpClient) {}

  postHuevo(data: any) {
    let hostname =
      document.location.protocol +
      '//' +
      document.location.hostname +
      ':3000/huevos';

    console.log();
    return this.http.post<any>(hostname, data);
  }

  getHuevo() {
    let hostname =
      document.location.protocol + '//' + document.location.hostname;
    return this.http.get<any>(hostname + '/huevos/');
  }
}

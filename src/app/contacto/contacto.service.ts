import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Icontacto } from './icontacto';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  private apiURL = 'http://localhost:51321/'
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.httpClient.get(this.apiURL + '')
      .pipe(catchError(this.errorHandler));
  }

  create(post: Icontacto): Observable<any> {
    return this.httpClient.post(this.apiURL + 'api/contacto/crear', JSON.stringify(post),
      this.httpOptions).pipe(catchError(this.errorHandler));
  }

  update(id: number, post: Icontacto): Observable<any> {
    return this.httpClient.put(this.apiURL + '' + id, JSON.stringify(post),
      this.httpOptions).pipe(catchError(this.errorHandler));
  }

  delete(id: number) {
    return this.httpClient.delete(this.apiURL + '' + id, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: any) {
    let errorMessage = ''
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = 'Código de error ' +
        error.status + '\n Mensaje: ' + error.message;
    }

    return throwError(errorMessage);
  }
}

import { Directiva } from './../../models/directiva.model';
import { Alumnos } from './../../models/alumnos.model';
import { Profesores } from './../../models/profesores.model';
import { Router } from '@angular/router';
import { URL_SERVICIOS } from './../../config/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }

  crearProfesor(profesor: Profesores) {
    const url = URL_SERVICIOS + '/profesor';
    console.log(profesor);
    return this.http.post(url, profesor).pipe(map((resp: any) => {

      Swal.fire(
        'Usuario creado correctamente',
        profesor.correo,
        'success'
      );


      return resp.usuario;
    }));
  }

  crearAlumnos(alumno: Alumnos) {
    const url = URL_SERVICIOS + '/alumnos';
    console.log(alumno);
    return this.http.post(url, alumno).pipe(map((resp: any) => {

      Swal.fire(
        'Usuario creado correctamente',
        alumno.correo,
        'success'
      );


      return resp.usuario;
    }));

  }

  crearDirectiva(directiva: Directiva) {

    const url = URL_SERVICIOS + '/directiva';
    console.log(directiva);
    return this.http.post(url, directiva).pipe(map((resp: any) => {

      Swal.fire(
        'Usuario creado correctamente',
        directiva.correo,
        'success'
      );


      return resp.usuario;
    }));
  }

}

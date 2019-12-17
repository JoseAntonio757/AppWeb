import { DirectivaUpdate } from './../../models/directivaUpdate.model';
import { ProfesoresUpdate } from './../../models/profesoresUpdate.model';
import { AlumnosUpdate } from './../../models/alumnosUpdate.model';
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
import { Usuario } from 'src/app/models/usuario.model';

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

  CargarUsuarios(usuario: Usuario) {
    const url = URL_SERVICIOS + '/identity';
    console.log(usuario);
    return this.http.post(url, usuario).pipe(map((resp: any) => {
      return resp.usuario;
    }));


  }

  buscarAlumno(id) {
    const url = URL_SERVICIOS + '/alumnos/' + id;
    console.log(id);
    return this.http.get(url).pipe(map((resp: any) => {
      if (resp == null) {
        Swal.fire(
          'No Se encontro coincidencia',
          resp.correo,
          'success'
        );
      } else {
        Swal.fire(
          'Usuario Encontrado',
          resp.correo,
          'success'
        );
      }
      return resp;
    }));
  }
  ActualizarAlumno(id, alumno: AlumnosUpdate) {
    console.log(alumno);
    const url = URL_SERVICIOS + '/alumnos/' + id;
    return this.http.put(url, alumno).pipe(map((resp: any) => {

      Swal.fire(
        'Actualizacion Correcta',
        resp.correo,
        'success'
      );
      return resp;
    }));
  }

  DeleteAlumnos(id) {
    const url = URL_SERVICIOS + '/alumnos/' + id;
    return this.http.delete(url).pipe(map((resp: any) => {

      Swal.fire(
        'Alumnos Eliminado',
        resp.correo,
        'success'
      );
      return resp;
    }));
  }

  UpdateProfesores(idP, profesor: ProfesoresUpdate) {
    const url = URL_SERVICIOS + '/profesor/' + idP;
    return this.http.put(url, profesor).pipe(map((resp: any) => {

      Swal.fire(
        'Actualizacion Correcta',
        resp.correo,
        'success'
      );
      return resp;
    }));

  }
  DeleteProfesares(idP) {
    const url = URL_SERVICIOS + '/profesor/' + idP;
    return this.http.delete(url).pipe(map((resp: any) => {

      Swal.fire(
        'Profesor Eliminado',
        resp.correo,
        'success'
      );
      return resp;
    }));
  }

  BuscarProfesores(idP) {
    const url = URL_SERVICIOS + '/profesor/' + idP;
    return this.http.get(url).pipe(map((resp: any) => {
      if (resp == null) {
        Swal.fire(
          'No Se encontro coincidencia',
          resp.correo,
          'success'
        );
      } else {
        Swal.fire(
          'Usuario Encontrado',
          resp.correo,
          'success'
        );
      }
      return resp;
    }));
  }



  UpdateDirectiva(idD, directiva: DirectivaUpdate) {
    const url = URL_SERVICIOS + '/directiva/' + idD;
    return this.http.put(url, directiva).pipe(map((resp: any) => {
      Swal.fire(
        'Actualizacion Correcta',
        resp.correo,
        'success'
      );
      return resp;
    }));

  }
  DeleteDirectiva(idD) {
    const url = URL_SERVICIOS + '/directiva/' + idD;
    return this.http.delete(url).pipe(map((resp: any) => {

      Swal.fire(
        'Directiva Eliminado',
        resp.correo,
        'success'
      );
      return resp;
    }));
  }

  BuscarDirectiva(idD) {
    const url = URL_SERVICIOS + '/directiva/' + idD;
    return this.http.get(url).pipe(map((resp: any) => {
      if (resp == null) {
        Swal.fire(
          'No Se encontro coincidencia',
          resp.correo,
          'success'
        );
      } else {
        Swal.fire(
          'Usuario Encontrado',
          resp.correo,
          'success'
        );
      }
      return resp;
    }));
  }

}

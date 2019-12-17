import { Calificasiones } from './../../models/calificasiones';
import { Observaciones } from './../../models/observaciones';
import { Email } from './../../models/email.model';
import { Usuario } from './../../models/usuario.model';
import { TutoresInt } from './../../models/tutoresInt';
import { DirectivaInt } from './../../models/directivaInt';
import { ProfesoresInt } from './../../models/profesoresInt';
import { Alumnosint } from './../../models/alumnosInt';
import { Usuarios } from './../../models/usuarios.model';
import { Router } from '@angular/router';
import { URL_SERVICIOS } from './../../config/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tutores } from './../../models/tutores.model';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  id = 1;
  corre123 = 'Status: 200 OK ';
  usuario: Usuarios;
  nombre = '';
  apellido = '';
  correo = '';
  password = '';
  matricual = '';
  jerarquia = '';
  private headers: HttpHeaders;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };
  constructor(public http: HttpClient, public router: Router) {
    // this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-16' });

  }
  guardarStorage(usuario: Usuarios) {

    localStorage.setItem('usuario', JSON.stringify(usuario));

    this.usuario = usuario;
  }

  estaLogueado() {
    return (this.usuario) ? true : false;
  }

  logout() {
    this.usuario = null;
    localStorage.removeItem('usuario');
    this.router.navigate(['/home']);
  }


  crearTutor(tutor: Tutores) {

    const url = URL_SERVICIOS + '/school';
    console.log(tutor);
    return this.http.post(url, tutor).pipe(map((resp: any) => {
      Swal.fire(
        'Usuario creado correctamente',
        tutor.correo,
        'success'
      );
      return resp.usuario;
    }));


  }



  ValidaUsuario(id, correo, password) {
    console.log(id);
    const url = URL_SERVICIOS + '/identity/' + id;
    return this.http.get<Usuarios>(url).pipe(map((resp: any) => {
      console.log(resp);
      if (resp.correo === correo && resp.password === password && resp.jerarquia === 3) {
        this.router.navigate(['/tutor']);
        Swal.fire(
          'Bienvenido ',
          resp.correo,
          'success'
        );
      }
      if (resp.correo === correo && resp.password === password && resp.jerarquia === 2) {
        this.router.navigate(['/profesor']);
        Swal.fire(
          'Bienvenido ',
          resp.correo,
          'success'
        );
      }
      if (resp.correo === correo && resp.password === password && resp.jerarquia === 1) {
        this.router.navigate(['/direccion']);
        Swal.fire(
          'Bienvenido ',
          resp.correo,
          'success'
        );
      }

      this.guardarStorage(resp);

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
  CargarAlumnos() {

    const url = URL_SERVICIOS + '/alumnos';
    return this.http.get<Alumnosint[]>(url);
  }

  CargarProfesores() {
    const url = URL_SERVICIOS + '/profesor';
    return this.http.get<ProfesoresInt>(url);
  }

  CargarDirectiva() {
    const url = URL_SERVICIOS + '/directiva';
    return this.http.get<DirectivaInt>(url);

  }

  CargarTutores() {
    const url = URL_SERVICIOS + '/school';
    return this.http.get<TutoresInt>(url);

  }

  PostExel(formData) {
    const url = URL_SERVICIOS + '/exel/1';
    console.log(formData);
    return this.http.get(url).pipe(map((resp: any) => {
      Swal.fire(
        'Excel uploaded successfully',
        resp,
        'success'
      );
      return;
    }));


  }

  PostExelObservaciones() {
    const url = URL_SERVICIOS + '/exel';
    return this.http.get(url).pipe(map((resp: any) => {
      Swal.fire(
        'Excel uploaded successfully',
        resp,
        'success'
      );
      return;
    }));


  }

  PostEmail(correo: Email) {
    console.log(correo);
    const url = URL_SERVICIOS + '/email';
    Swal.fire(
      'Reporte enviado',
      correo.matricula,
      'success'
    );
    return this.http.post(url, correo).pipe(map((resp: any) => {

      return resp;
    }));

  }

  PostEmailGeneral() {
    const url = URL_SERVICIOS + '/email/' + this.id;
    return this.http.get<DirectivaInt>(url).pipe(map((resp: any) => {
      Swal.fire(
        'Correos Enviados',
        resp.correo,
        'success'
      );
      return resp;
    }));
  }

  CargarObservaciones() {

    const url = URL_SERVICIOS + '/observaciones';
    return this.http.get<Observaciones>(url);
  }

  CargarCalificasiones() {

    const url = URL_SERVICIOS + '/calificasiones';
    return this.http.get<Calificasiones>(url);
  }

  CargarCalificasionesAlumno(id) {

    const url = URL_SERVICIOS + '/calificasiones/' + id;
    return this.http.get<Calificasiones>(url);
  }



}

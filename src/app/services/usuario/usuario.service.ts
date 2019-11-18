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
  usuario: Usuarios;
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
    return (this.usuario.id > 1) ? true : false;
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

      if (resp.correo === correo && resp.password === password && resp.jerarquia === 3) {
        this.router.navigate(['/tutor']);
      }
      if (resp.correo === correo && resp.password === password && resp.jerarquia === 2) {
        this.router.navigate(['/profesor']);
      }
      if (resp.correo === correo && resp.password === password && resp.jerarquia === 1) {
        this.router.navigate(['/direccion']);
      }

      this.guardarStorage(resp.Usuarios);

      return resp.usuario;
    }));

  }

  CargarUsuarios() {

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





}

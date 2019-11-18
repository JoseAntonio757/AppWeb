import { Directiva } from './../../models/directiva.model';
import { Alumnos } from './../../models/alumnos.model';
import { Profesores } from './../../models/profesores.model';
import { CrudService } from './../../services/crud/crud.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-direccion',
  templateUrl: './Direccion.component.html',
  styleUrls: ['./Direccion.component.css']
})
export class DireccionComponent implements OnInit {
  formaP: FormGroup;
  formaA: FormGroup;
  formaD: FormGroup;

  ver  = 1;

  alert = 'Uppss!!!!';
  constructor(private roueter: Router, private crud: CrudService) { }

  sonIguales(campo1: string, campo2: string) {

    return (group: FormGroup) => {

      const pass1 = group.controls[campo1].value;
      const pass2 = group.controls[campo2].value;

      if (pass1 === pass2) {
        return null;
      }

      return {
        sonIguales: true
      };
    };
  }
  ngOnInit() {
    this.formaP = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      apellido: new FormControl(null, Validators.required),
      domicilio: new FormControl(null, Validators.required),
      licencia: new FormControl(null, Validators.required),
      matricula_profesor: new FormControl(null, Validators.required),
      correo: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      password2: new FormControl(null, Validators.required),
      numero_telefono: new FormControl(null, Validators.required),
      edad: new FormControl(null, Validators.required),
      genero: new FormControl(null, Validators.required),
    }, { validators: this.sonIguales('password', 'password2') });

    this.formaP.setValue({
      nombre: 'JoseAntonio',
      apellido: 'Ramirez',
      domicilio: 'Av.de las Palmas #23',
      edad: 15,
      correo: 'jose_97rh@hotmail.com',
      licencia: '1245AS',
      password: '123456',
      password2: '123456',
      matricula_profesor: 'P-15090169',
      numero_telefono: 55369874,
      genero: 'Masculino o Femenino'

    });

    this.formaA = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      apellido: new FormControl(null, Validators.required),
      domicilio: new FormControl(null, Validators.required),
      edad: new FormControl(null, Validators.required),
      matricula_alumno: new FormControl(null, Validators.required),
      numero_telefono: new FormControl(null, Validators.required),
      genero: new FormControl(null, Validators.required),
      correo: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      password2: new FormControl(null, Validators.required),
    }, { validators: this.sonIguales('password', 'password2') });

    this.formaA.setValue({
      nombre: 'JoseAntonio',
      apellido: 'Ramirez',
      domicilio: 'Av.de las Palmas #23',
      edad: 15,
      correo: 'jose_97rh@hotmail.com',
      password: '123456',
      password2: '123456',
      matricula_alumno: 'A-15090169',
      numero_telefono: 55369874,
      genero: 'Masculino o Femenino'

    });

    this.formaD = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      apellido: new FormControl(null, Validators.required),
      domicilio: new FormControl(null, Validators.required),
      edad: new FormControl(null, Validators.required),
      matricula_directiva: new FormControl(null, Validators.required),
      numero_telefono: new FormControl(null, Validators.required),
      correo: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      password2: new FormControl(null, Validators.required),
      genero: new FormControl(null, Validators.required),
    }, { validators: this.sonIguales('password', 'password2') });

    this.formaD.setValue({
      nombre: 'JoseAntonio',
      apellido: 'Ramirez',
      domicilio: 'Av.de las Palmas #23',
      edad: 15,
      correo: 'jose_97rh@hotmail.com',
      password: '123456',
      password2: '123456',
      matricula_directiva: 'D-15090169',
      numero_telefono: 55369874,
      genero: 'Masculino o Femenino'

    });

  }

  registrarProfesores() {
    const jerarquia = 2;
    if (this.formaP.invalid) {
      Swal.fire(
        'Passwords must match',
        this.alert,
        'error'
      );
      return;
    }

    const profesor = new Profesores(
      this.formaP.value.nombre,
      this.formaP.value.apellido,
      this.formaP.value.domicilio,
      this.formaP.value.licencia,
      this.formaP.value.matricula_profesor,
      this.formaP.value.correo,
      this.formaP.value.password,
      this.formaP.value.numero_telefono,
      this.formaP.value.edad,
      jerarquia,
      this.formaP.value.genero
    );

    this.crud.crearProfesor(profesor).subscribe(resp => this.roueter.navigate['/direccion']);

  }

  registrarAlumnos() {
    const jerarquia = 3;
    if (this.formaA.invalid) {
      Swal.fire(
        'Passwords must match',
        this.alert,
        'error'
      );
      return;
    }

    const alumno = new Alumnos(
      this.formaA.value.nombre,
      this.formaA.value.apellido,
      this.formaA.value.domicilio,
      this.formaA.value.edad,
      this.formaA.value.matricula_alumno,
      this.formaA.value.numero_telefono,
      jerarquia,
      this.formaA.value.genero,
      this.formaA.value.correo,
      this.formaA.value.password
    );

    this.crud.crearAlumnos(alumno).subscribe(resp => this.roueter.navigate['/direccion']);

  }

  registrarDirectiva() {
    const jerarquia = 1;
    if (this.formaA.invalid) {
      Swal.fire(
        'Passwords must match',
        this.alert,
        'error'
      );
      return;
    }

    const directiva = new Directiva(
      this.formaD.value.nombre,
      this.formaD.value.apellido,
      this.formaD.value.domicilio,
      this.formaD.value.edad,
      this.formaD.value.matricula_directiva,
      this.formaD.value.numero_telefono,
      this.formaD.value.correo,
      this.formaD.value.password,
      jerarquia,
      this.formaD.value.genero
    );

    this.crud.crearDirectiva(directiva).subscribe(resp => this.roueter.navigate['/direccion']);

  }

  veralumno() {
    this.roueter.navigate(['/consultas']);
  }


}

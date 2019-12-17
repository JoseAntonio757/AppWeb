import { DirectivaUpdate } from './../../models/directivaUpdate.model';
import { ProfesoresUpdate } from './../../models/profesoresUpdate.model';
import { AlumnosUpdate } from './../../models/alumnosUpdate.model';
import { Alumnosint } from './../../models/alumnosInt';
import { CrudService } from './../../services/crud/crud.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  formaA: FormGroup;
  formaP: FormGroup;
  formaD: FormGroup;
  id = 0;
  idP = 0;
  idD = 0;
  alumno: Alumnosint[];
  constructor(private router: Router, private crudservices: CrudService) { }

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


  }

  register() {
    this.router.navigate(['/direccion']);

  }

  consult() {
    this.router.navigate(['/consultas']);
  }

  Dhome() {
    this.router.navigate(['/DHome']);
  }

  updateAlumnos() {
    console.log('Update Alumnos');
    const jerarquia = 3;
    const alumno = new AlumnosUpdate(
      this.id,
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
    this.crudservices.ActualizarAlumno(this.id, alumno).subscribe(resp => this.router.navigate['/update']);
  }
  deleteAlumnos() {
    this.crudservices.DeleteAlumnos(this.id).subscribe(resp => this.router.navigate['/update']);
  }
  buscarAlumnos() {
    this.crudservices.buscarAlumno(this.id).subscribe((resp: any) => {
      this.alumno = resp;
      this.formaA.setValue({
        nombre: resp.nombre,
        apellido: resp.apellido,
        domicilio: resp.domicilio,
        correo: resp.correo,
        password: resp.password,
        password2: resp.password,
        matricula_alumno: resp.matricula_alumno,
        numero_telefono: resp.numero_telefono,
        edad: resp.edad,
        genero: resp.genero
      });

      console.log(this.alumno);

    });
  }

  updateProfesores() {
    const jerarquia = 2;
    const profesor = new ProfesoresUpdate(
      this.idP,
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
    this.crudservices.UpdateProfesores(this.idP, profesor).subscribe(resp => this.router.navigate['/update']);


  }
  deleteProfesores() {
    this.crudservices.DeleteProfesares(this.idP).subscribe(resp => this.router.navigate['/update']);
  }

  buscarProfesores() {
    this.crudservices.BuscarProfesores(this.idP).subscribe((resp: any) => {
      this.formaP.setValue({
        nombre: resp.nombre,
        apellido: resp.apellido,
        domicilio: resp.domicilio,
        edad: resp.edad,
        correo: resp.correo,
        licencia: resp.licencia,
        password: resp.password,
        password2: resp.password,
        matricula_profesor: resp.matricula_profesor,
        numero_telefono: resp.numero_telefono,
        genero: resp.genero
      });

    });

  }



  updateDirectiva() {
    const jerarquia = 1;
    const directiva = new DirectivaUpdate(
      this.idD,
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
    this.crudservices.UpdateDirectiva(this.idD, directiva).subscribe(resp => this.router.navigate['/update']);

  }
  deleteDirectiva() {
   this.crudservices.DeleteDirectiva(this.idD).subscribe(resp => this.router.navigate['/update']);
  }

  buscarDirectiva() {
    this.crudservices.BuscarDirectiva(this.idD).subscribe((resp: any) => {
      this.formaD.setValue({
        nombre: resp.nombre,
        apellido: resp.apellido,
        domicilio: resp.domicilio,
        edad: resp.edad,
        correo: resp.correo,
        password: resp.password,
        password2: resp.password,
        matricula_directiva: resp.matricula_directiva,
        numero_telefono: resp.numero_telefono,
        genero: resp.genero
      });
    });

  }
}

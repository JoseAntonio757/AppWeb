import { TutoresInt } from './../../models/tutoresInt';
import { DirectivaInt } from './../../models/directivaInt';
import { ProfesoresInt } from './../../models/profesoresInt';
import { Alumnosint } from './../../models/alumnosInt';
import { Usuarios } from './../../models/usuarios.model';
import { Tutores } from './../../models/tutores.model';
import { Directiva } from './../../models/directiva.model';
import { Profesores } from './../../models/profesores.model';
import { Alumnos } from './../../models/alumnos.model';
import { UsuarioService } from './../../services/usuario/usuario.service';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-consultas',
  templateUrl: './Consultas.component.html',
  styleUrls: ['./Consultas.component.css']
})
export class ConsultasComponent implements OnInit {
  cargando = true;
  alumno: Alumnosint[] = [];
  profesor: ProfesoresInt[];
  directiva: DirectivaInt[];
  tutor: TutoresInt[];
  usuario: Usuarios[];
  prueba: any = [];
  totalRegistros = 0;



  displayedColumnsAlumnos: string[] = ['id_alumnos', 'nombre', 'apellido', 'domicilio', 'edad', 'matricula_alumno',
    'numero_telefono', 'jerarquia', 'genero', 'correo', 'password'];
  displayedColumnsProfesores: string[] = ['id_profesor', 'nombre', 'apellido', 'domicilio', 'licencia', 'matricula_profesor',
    'correo', 'password', 'numero_telefono', 'edad', 'jerarquia', 'genero'];
  displayedColumnsDirectiva: string[] = ['id_directiva', 'nombre', 'apellido', 'domicilio', 'edad', 'matricula_directiva',
    'numero_telefono', 'correo', 'password', 'jerarquia', 'genero'];
  displayedColumnsTutores: string[] = ['id_tutor', 'nombre', 'apellido', 'direccion', 'correo', 'password', 'matricula_alumno',
    'numero_telefono', 'edad', 'jerarquia', 'genero'];

  dataSourceAlumno = new MatTableDataSource(this.alumno);
  dataSourceProfesor = new MatTableDataSource(this.profesor);
  dataSourceDirectiva = new MatTableDataSource(this.directiva);
  dataSourceTutor = new MatTableDataSource(this.tutor);
  @ViewChild(MatPaginator) paginador: MatPaginator;


  applyFilterAlumno(filterValue: string) {
    this.dataSourceAlumno.filter = filterValue.trim().toLowerCase();

  }
  applyFilterProfesor(filterValue: string) {
    this.dataSourceProfesor.filter = filterValue.trim().toLowerCase();

  }
  applyFilterDirectiva(filterValue: string) {
    this.dataSourceDirectiva.filter = filterValue.trim().toLowerCase();

  }
  applyFilterTutor(filterValue: string) {
    this.dataSourceTutor.filter = filterValue.trim().toLowerCase();

  }

  constructor(private router: Router, private servicesUsu: UsuarioService) {
  }


  ngOnInit() {

    this.dataSourceAlumno.paginator = this.paginador;
    this.dataSourceProfesor.paginator = this.paginador;
    this.dataSourceDirectiva.paginator = this.paginador;
    this.dataSourceTutor.paginator = this.paginador;
   // this.AlumnosGet();

  }


  register() {
    this.router.navigate(['/direccion']);

  }

  update() {
    this.router.navigate(['/update']);
  }

  Dhome() {
    this.router.navigate(['/DHome']);
  }

  AlumnosGet() {
    this.cargando = true;
    this.servicesUsu.CargarAlumnos().subscribe((resp: any) => {
      this.alumno = resp;
      console.log(this.alumno);
      this.cargando = false;
    });

  }
  ProfesoresGet() {

    this.cargando = true;
    this.servicesUsu.CargarProfesores().subscribe((resp: any) => {
      this.profesor = resp;
      this.cargando = false;

    });

  }

  DirectivaGet() {
    this.cargando = true;
    this.servicesUsu.CargarDirectiva().subscribe((resp: any) => {
      this.directiva = resp;
      this.cargando = false;

    });

  }

  TutoresGet() {
    this.cargando = true;
    this.servicesUsu.CargarTutores().subscribe((resp: any) => {
      this.tutor = resp;
      this.cargando = false;

    });

  }



}





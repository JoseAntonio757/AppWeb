import { UsuarioService } from './../../services/usuario/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Tutores } from '../../models/tutores.model';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  forma: FormGroup;
  jerarquia = 3;
  idtutor = null;
  alert = 'Upsss!!!!';
  constructor(private usuarioservice: UsuarioService, private roueter: Router) { }
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

    this.forma = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      apellido: new FormControl(null, Validators.required),
      direccion: new FormControl(null, Validators.required),
      correo: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      password2: new FormControl(null, Validators.required),
      matricula_alumno: new FormControl(null, Validators.required),
      numero_telefono: new FormControl(null, Validators.required),
      edad: new FormControl(null, Validators.required),
      genero: new FormControl(null, Validators.required),
    }, { validators: this.sonIguales('password', 'password2') });

    this.forma.setValue({
      nombre: 'JoseAntonio',
      apellido: 'Ramirez',
      direccion: 'Av.de las Palmas #23',
      correo: 'jose_97rh@hotmail.com',
      password: '123456',
      password2: '123456',
      matricula_alumno: 'D-15090169',
      numero_telefono: 55369874,
      edad: 15,
      genero: 'Masculino o Femenino'

    });
  }


  login() {
    this.roueter.navigate(['/login']);
  }

  registrarUsuario() {
    if (this.forma.invalid) {
      Swal.fire(
        'Passwords must match',
         this.alert,
        'error'
      );
      return;
    }

    const tutor = new Tutores(
      this.forma.value.nombre,
      this.forma.value.apellido,
      this.forma.value.direccion,
      this.forma.value.correo,
      this.forma.value.password,
      this.forma.value.matricula_alumno,
      this.forma.value.numero_telefono,
      this.forma.value.edad,
      this.jerarquia,
      this.forma.value.genero
    );
    // const usuario = this.forma.value;
    this.usuarioservice.crearTutor(tutor).subscribe(resp => this.roueter.navigate['/login']);
    //  this.usuarioservice.crearTutor(tutor);
    // this.roueter.navigate(['/home']);
  }
}

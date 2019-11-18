import { Usuarios } from './../../models/usuarios.model';
import { UsuarioService } from './../../services/usuario/usuario.service';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  correo = '';
  password = '';
  id = 0;
  usuarios: Usuarios[];

  constructor(private roueter: Router, private servicio: UsuarioService) {

  }



  ngOnInit() {
  }

  login() {
    console.log('fallo Uppsss!');

    return this.servicio.ValidaUsuario(this.id, this.correo, this.password).subscribe(correcto => this.usuarios = correcto );

  }

  Registro() {
    this.roueter.navigate(['/regisro']);
  }

}

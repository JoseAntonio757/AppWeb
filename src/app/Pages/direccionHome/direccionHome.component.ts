import { DirectivaInt } from './../../models/directivaInt';
import { UsuarioService } from './../../services/usuario/usuario.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-direccionhome',
  templateUrl: './direccionHome.component.html',
  styleUrls: ['./direccionHome.component.css']
})
export class DireccionHomeComponent implements OnInit {
  correo = 'desde: SchooFray0014@gmail.com ';
  directiva: DirectivaInt[];
  constructor(private router: Router, private Uservice: UsuarioService) { }

  ngOnInit() {
  }
  veralumno() {
    this.router.navigate(['/consultas']);
  }

  update() {
    this.router.navigate(['/update']);
  }

  register() {
    this.router.navigate(['/direccion']);
  }

  aviso() {
    Swal.fire(
      ' Enviando Notificasion Por Correo',
      this.correo,
      'success'
    );
    console.log('Entro a aviso');
    this.Uservice.PostEmailGeneral().subscribe(resp => this.router.navigate['/DHome']);

  }

}

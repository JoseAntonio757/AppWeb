import { Calificasiones } from './../../../models/calificasiones';
import { UsuarioService } from './../../../services/usuario/usuario.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.component.html',
  styleUrls: ['./calificaciones.component.css']
})
export class CalificacionesComponent implements OnInit {
  calificasion: Calificasiones[];
  constructor(private services: UsuarioService) { }

  ngOnInit() {
    this.services.CargarCalificasiones().subscribe((resp: any) => {
      this.calificasion = resp;
      console.log(this.calificasion);
    });

  }

}

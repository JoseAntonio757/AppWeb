import { UsuarioService } from './../../services/usuario/usuario.service';
import { Calificasiones } from './../../models/calificasiones';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tutor',
  templateUrl: './tutor.component.html',
  styleUrls: ['./tutor.component.css']
})
export class TutorComponent implements OnInit {
  titulo = 'Generar PDF con Angular';
  cali: Calificasiones[];
  id = 1;
  calif = [
    {
      id: ' 1 ',
      espanol: ' 1 ',
      matematicas: ' 1 ',
      artes: ' 1 ',
      lectura: ' 1 ',
      historia: ' 1 ',
      educasionF: ' 1 '

    }
  ];
  constructor(private Uservices: UsuarioService) { }

  ngOnInit() {
    this.Uservices.CargarCalificasionesAlumno(this.id).subscribe((resp: any) => {
      this.cali = resp;
      console.log(this.cali);
    });
  }
}

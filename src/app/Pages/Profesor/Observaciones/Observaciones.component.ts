import { Observaciones } from './../../../models/observaciones';
import { UsuarioService } from './../../../services/usuario/usuario.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-observaciones',
  templateUrl: './Observaciones.component.html',
  styleUrls: ['./Observaciones.component.css']
})
export class ObservacionesComponent implements OnInit {
  Uploadafile: any;
  observaciones: Observaciones[];
  constructor(private services: UsuarioService) { }

  ngOnInit() {
    this.services.CargarObservaciones().subscribe((resp: any) => {
      this.observaciones = resp;
      console.log(this.observaciones);
    });
  }
  UploadObservaciones() {
    this.services.PostExelObservaciones().subscribe((res) => {
      console.log('Exel Uploaded');
    });
  }
  FilechangeObservaciones(e) {
    console.log('Cargar archivo', e);
    this.Uploadafile = e.target.files;
  }
}

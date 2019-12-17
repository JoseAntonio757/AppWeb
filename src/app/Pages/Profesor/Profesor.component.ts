import { Email } from './../../models/email.model';
import { UsuarioService } from './../../services/usuario/usuario.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profesor',
  templateUrl: './Profesor.component.html',
  styleUrls: ['./Profesor.component.css']
})
export class ProfesorComponent implements OnInit {
  correo = '';
  nombre = '';
  matricula = '';
  descripcion = '';
  Uploadafile: any;
  formData = [];
  constructor(private router: Router, private services: UsuarioService) { }

  ngOnInit() {
  }

  cali() {

    this.router.navigate(['/calificaciones']);
  }

  obser() {
    this.router.navigate(['/observaciones']);
  }

  Upload() {
   /* console.log('Up Load');
    const formData = new FormData();
    for (let i = 0; i <= this.Uploadafile.length; i++) {
      formData.append('uploads[]', this.Uploadafile[i], this.Uploadafile[i].name);
    }*/
    this.services.PostExel(this.formData).subscribe((res) => {
      console.log('Exel Uploaded');
    });
  }
  Filechange(e) {
    console.log('Cargar archivo', e);
    this.Uploadafile = e.target.files;
  }



  Reporte() {
    const correo = new Email(
      this.correo,
      this.matricula,
      this.descripcion,
      this.nombre
    );
    this.services.PostEmail(correo).subscribe(resp => this.router.navigate['/profesor']);
    this.correo = '';
    this.nombre = '';
    this.matricula = '';
    this.descripcion = '';

  }

}

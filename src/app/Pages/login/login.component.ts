import { Router } from '@angular/router';
import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario = '';
  password = '';
  usuarios = [
    {
      id: '1',
      name: 'JoseAntonio',
      password: '12345',
      nivel: '2',
      des: 'Docente'
    },
    {
      id: '2',
      name: 'Mariana ',
      password: '12345',
      nivel: '3',
      des: 'Tutor'
    },
    {
      id: '3',
      name: 'Sandi',
      password: '12345',
      nivel: '1',
      des: 'Direccion'
    }
  ];




  constructor(private roueter: Router) {

   }



  ngOnInit() {
  }

  login() {
    if (this.usuario === 'Sandi' && this.password === 'sandi' ) {
      console.log('nivel1');
      this.roueter.navigate(['/direccion']);
    }

    if (this.usuario === 'JoseAntonio' && this.password === 'joseantonio' ) {
      this.roueter.navigate(['/profesor']);
      console.log('nivel2');
    }

    if (this.usuario === 'Mariana' && this.password === 'mariana' ) {
      this.roueter.navigate(['/tutor']);
      console.log('nivel3');
    }
    console.log('Entro');
  }

  Registro() {
    this.roueter.navigate(['/regisro']);
  }

}

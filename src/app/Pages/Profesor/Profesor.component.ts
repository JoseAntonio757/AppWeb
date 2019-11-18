import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profesor',
  templateUrl: './Profesor.component.html',
  styleUrls: ['./Profesor.component.css']
})
export class ProfesorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  cali() {

    this.router.navigate(['/calificaciones']);
  }

  obser() {
   this.router.navigate(['/observaciones']);
  }

}

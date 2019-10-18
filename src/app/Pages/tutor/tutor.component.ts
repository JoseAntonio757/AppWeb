import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';



declare let pdfMake: any;

@Component({
  selector: 'app-tutor',
  templateUrl: './tutor.component.html',
  styleUrls: ['./tutor.component.css']
})
export class TutorComponent implements OnInit {
  titulo = 'Generar PDF con Angular';
  constructor() { }

  ngOnInit() {
  }

  public pdf() {

    var data = document.getElementById('contenido');
    html2canvas(data).then(canvas => {
      // Few necessary setting options
      var imgWidth = 200;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
      var position = -45;
      pdf.addImage(contentDataURL, 'PNG', 2, position, imgWidth, imgHeight)
      pdf.save('Calificasiones.pdf'); // Generated PDF
    });
  }




}

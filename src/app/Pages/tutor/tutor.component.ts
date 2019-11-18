import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

import { PDFExportModule } from '@progress/kendo-angular-pdf-export';

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
}

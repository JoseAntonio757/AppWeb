import { DireccionHomeComponent } from './../Pages/direccionHome/direccionHome.component';
import { UpdateComponent } from './../Pages/update/update.component';
import { AbaoutComponent } from './../Pages/abaout/abaout.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ConsultasComponent } from './../Pages/Consultas/Consultas.component';
import { ServicesModule } from './../services/services.module';
import { ObservacionesComponent } from './../Pages/Profesor/Observaciones/Observaciones.component';
import { CalificacionesComponent } from './../Pages/Profesor/calificaciones/calificaciones.component';
import { RegistroComponent } from './../Pages/registro/registro.component';
import { TutorComponent } from './../Pages/tutor/tutor.component';
import { ProfesorComponent } from './../Pages/Profesor/Profesor.component';
import { DireccionComponent } from './../Pages/Direccion/Direccion.component';

import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './../Pages/login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({

  imports: [RouterModule,
    CommonModule,
    FormsModule,
    PDFExportModule,
    MatTabsModule,
    MatInputModule,
    MatMenuModule,
    MatTableModule,
    MatBottomSheetModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    ServicesModule

  ],

  declarations: [
    NopagefoundComponent,
    NopagefoundComponent,
    NavbarComponent,
    LoginComponent,
    FooterComponent,
    DireccionComponent,
    TutorComponent,
    AbaoutComponent,
    ProfesorComponent,
    RegistroComponent,
    CalificacionesComponent,
    ObservacionesComponent,
    ConsultasComponent,
    UpdateComponent,
    DireccionHomeComponent

  ],
  exports: [
    NopagefoundComponent,
    NopagefoundComponent,
    NavbarComponent,
    LoginComponent,
    FooterComponent,
    DireccionComponent,
    TutorComponent,
    ProfesorComponent,
    AbaoutComponent,
    RegistroComponent,
    CalificacionesComponent,
    ObservacionesComponent,
    ConsultasComponent,
    UpdateComponent,
    DireccionHomeComponent
  ]

})

export class SharedModule { }

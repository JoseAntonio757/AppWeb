import {MatPaginatorModule} from '@angular/material/paginator';
import { ConsultasComponent } from './../Pages/Consultas/Consultas.component';
import { ServicesModule } from './../services/services.module';
import { ObservacionesComponent } from './../Pages/Profesor/Observaciones/Observaciones.component';
import { CalificacionesComponent } from './../Pages/Profesor/calificaciones/calificaciones.component';
import { RegistroComponent } from './../Pages/registro/registro.component';
import { TutorComponent } from './../Pages/tutor/tutor.component';
import { ProfesorComponent } from './../Pages/Profesor/Profesor.component';
import { DireccionComponent } from './../Pages/Direccion/Direccion.component';
import { AbaoutComponent } from './../Pages/abaout/abaout.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './../Pages/login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';



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
            ServicesModule

          ],

        declarations: [
            NopagefoundComponent,
            NopagefoundComponent,
            NavbarComponent,
            LoginComponent,
            FooterComponent,
            AbaoutComponent,
            DireccionComponent,
            TutorComponent,
            ProfesorComponent,
            RegistroComponent,
            CalificacionesComponent,
            ObservacionesComponent,
            ConsultasComponent
        ],
        exports: [
            NopagefoundComponent,
            NopagefoundComponent,
            NavbarComponent,
            LoginComponent,
            FooterComponent,
            AbaoutComponent,
            DireccionComponent,
            TutorComponent,
            ProfesorComponent,
            RegistroComponent,
            CalificacionesComponent,
            ObservacionesComponent,
            ConsultasComponent
        ]

})

export class SharedModule { }

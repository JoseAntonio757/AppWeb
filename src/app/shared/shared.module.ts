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

import { FormsModule } from '@angular/forms';



@NgModule({

    imports: [RouterModule,
            CommonModule,
            FormsModule

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
            RegistroComponent
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
            RegistroComponent
        ]

})

export class SharedModule { }

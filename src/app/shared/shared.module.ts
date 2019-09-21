import { LoginComponent } from './../Pages/login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';


import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';





@NgModule({

    imports: [RouterModule,
            CommonModule,

          ],

        declarations: [
            NopagefoundComponent,
            NopagefoundComponent,
            NavbarComponent,
            LoginComponent
        ],
        exports: [
            NopagefoundComponent,
            NopagefoundComponent,
            NavbarComponent,
            LoginComponent
        ]

})

export class SharedModule { }

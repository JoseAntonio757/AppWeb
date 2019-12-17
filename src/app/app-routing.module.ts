import { DireccionHomeComponent } from './Pages/direccionHome/direccionHome.component';
import { UpdateComponent } from './Pages/update/update.component';
import { AbaoutComponent } from './Pages/abaout/abaout.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegistroComponent } from './Pages/registro/registro.component';
import { HomeComponent } from './home/home.component';

import { Routes, RouterModule } from '@angular/router';
import { LoginGuardGuard } from './services/guards/login-guard.guard';
import { ConsultasComponent } from './Pages/Consultas/Consultas.component';
import { ObservacionesComponent } from './Pages/Profesor/Observaciones/Observaciones.component';
import { CalificacionesComponent } from './Pages/Profesor/calificaciones/calificaciones.component';
import { TutorComponent } from './Pages/tutor/tutor.component';
import { ProfesorComponent } from './Pages/Profesor/Profesor.component';
import { DireccionComponent } from './Pages/Direccion/Direccion.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';

import { NavbarComponent } from './shared/navbar/navbar.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
 // {
   // path: '',
    // canActivate: [LoginGuardGuard],
   // children: [
  { path: 'Navbar', component: NavbarComponent },
  { path: 'direccion', component: DireccionComponent },
  { path: 'profesor', component: ProfesorComponent },
  { path: 'tutor', component: TutorComponent },
  { path: 'calificaciones', component: CalificacionesComponent },
  { path: 'observaciones', component: ObservacionesComponent },
  { path: 'consultas', component: ConsultasComponent },
  { path: 'update', component: UpdateComponent},
  { path: 'DHome', component: DireccionHomeComponent},
  //  ]
 // },
  { path: 'login', component: LoginComponent },
  { path: 'abaout', component: AbaoutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'regisro', component: RegistroComponent },
  { path: '**', component: NopagefoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { ConsultasComponent } from './Pages/Consultas/Consultas.component';
import { ObservacionesComponent } from './Pages/Profesor/Observaciones/Observaciones.component';
import { CalificacionesComponent } from './Pages/Profesor/calificaciones/calificaciones.component';
import { RegistroComponent } from './Pages/registro/registro.component';
import { TutorComponent } from './Pages/tutor/tutor.component';
import { ProfesorComponent } from './Pages/Profesor/Profesor.component';
import { DireccionComponent } from './Pages/Direccion/Direccion.component';
import { AbaoutComponent } from './Pages/abaout/abaout.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { LoginComponent } from './Pages/login/login.component';
import { NavbarComponent } from './shared/navbar/navbar.component';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: 'Navbar', component: NavbarComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'abaout', component: AbaoutComponent},
  {path: 'direccion', component: DireccionComponent},
  {path: 'profesor', component: ProfesorComponent},
  {path: 'tutor', component: TutorComponent},
  {path: 'regisro', component: RegistroComponent},
  {path: 'calificaciones', component: CalificacionesComponent},
  {path: 'observaciones', component: ObservacionesComponent},
  {path: 'consultas',component: ConsultasComponent},
  {path: '**', component: NopagefoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

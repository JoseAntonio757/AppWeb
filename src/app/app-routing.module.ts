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
  {path: '**', component: NopagefoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

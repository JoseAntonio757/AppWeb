import { LoginGuardGuard } from './guards/login-guard.guard';
import { CrudService } from './crud/crud.service';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {CommonModule} from '@angular/common';

import { UsuarioService } from './usuario/usuario.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    UsuarioService,
    CrudService,
    LoginGuardGuard
  ],
  declarations: [],
})
export class ServicesModule {}

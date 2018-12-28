import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginService } from './_servicios/login.service';
import { MatriculaService } from './_servicios/matricula.service';

import { AuthGuard } from './_guards/auth.guard';
import { PieComponent } from './pie/pie.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { UnidadComponent } from './unidad/unidad.component';
import { NivelComponent } from './nivel/nivel.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PieComponent,
    EncabezadoComponent,
    UnidadComponent,
    NivelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthGuard,
    LoginService,
    MatriculaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

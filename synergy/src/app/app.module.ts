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
import { RespuestasService } from './_servicios/respuestas.service';

import { AuthGuard } from './_guards/auth.guard';
import { PieComponent } from './pie/pie.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { UnidadComponent } from './unidad/unidad.component';
import { NivelComponent } from './nivel/nivel.component';
import { VisorComponent } from './visor/visor.component';
import { VisorHTMLComponent } from './visor-html/visor-html.component';
import { MaterialComponent } from './material/material.component';
import { RouterModule } from '@angular/router';
import { SubencabezadoComponent } from './subencabezado/subencabezado.component';
import { SalirComponent } from './salir/salir.component';
import { LibroComponent } from './libro/libro.component';
import { SanitizeHtmlPipe } from './_guards/SanitizeHtmlPipe.transform';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PieComponent,
    EncabezadoComponent,
    UnidadComponent,
    NivelComponent,
    VisorComponent,
    VisorHTMLComponent,
    MaterialComponent,
    SubencabezadoComponent,
    SalirComponent,
    LibroComponent,
    SanitizeHtmlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [
    AuthGuard,
    LoginService,
    MatriculaService,
    RespuestasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

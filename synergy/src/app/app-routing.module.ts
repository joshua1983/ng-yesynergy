import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UnidadComponent } from './unidad/unidad.component';
import { NivelComponent } from './nivel/nivel.component';
import { VisorComponent } from './visor/visor.component';
import { MaterialComponent } from './material/material.component';
import { LibroComponent } from './libro/libro.component';
import { SalirComponent } from './salir/salir.component';

import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'salir', component: SalirComponent },
  { path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    data: {
      breadcrumb: "Home"
    }
  },
  { path: 'libro/:act/:nivel/:unidad',
    component: LibroComponent,
    canActivate: [AuthGuard],
    data: {
      breadcrumb: "Libro"
    }
  },
  { path: 'libro/:act',
    component: LibroComponent,
    canActivate: [AuthGuard],
    data: {
      breadcrumb: "Libro"
    }
  },
  { path: 'unidad/:act/:nivel',
    component: UnidadComponent,
    canActivate: [AuthGuard],
    data: {
      breadcrumb: "Unidad"
    }
  },
  { path: 'nivel/:libro',
    component: NivelComponent,
    canActivate: [AuthGuard],
    data: {
      breadcrumb: "Nivel"
    }
  },
  { path: 'material/:nivel',
    component: MaterialComponent,
    canActivate: [AuthGuard],
    data: {
      breadcrumb: "Material"
    }
  },
  { path: 'visor/:libro/:nivel/:unidad',
    component: VisorComponent,
    canActivate: [AuthGuard],
    data: {
      breadcrumb: "Visor"
    }
  },
  { path: 'visor/:libro/:nivel/:unidad/:actividad',
    component: VisorComponent,
    canActivate: [AuthGuard],
    data: {
      breadcrumb: "Visor"
    }
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

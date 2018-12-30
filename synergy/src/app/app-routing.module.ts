import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UnidadComponent } from './unidad/unidad.component';
import { NivelComponent } from './nivel/nivel.component';
import { VisorComponent } from './visor/visor.component';

import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  { path: 'unidad/:libro/:nivel',
    component: UnidadComponent,
    canActivate: [AuthGuard]
  },
  { path: 'nivel/:libro',
    component: NivelComponent,
    canActivate: [AuthGuard]
  },
  { path: 'visor/:libro/:nivel/:unidad',
    component: VisorComponent,
    canActivate: [AuthGuard]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

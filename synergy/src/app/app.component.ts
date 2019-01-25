import { Component } from '@angular/core';
import { LoginService } from './_servicios/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'synergy';
  encabezado:boolean;

  constructor(private loginService: LoginService){}

  ngOnInit() {
    document.body.classList.add('fondo');

  }

  ngDoCheck(){
    this.encabezado = this.loginService.isLogged();
  }





}

import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../_servicios/login.service';


@Component({
  selector: 'encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  @Input('titulo') titulo: string;


  constructor(private loginService: LoginService) {

  }


  ngOnInit() {

  }

  logout(){
    this.loginService.logout()
  }

}

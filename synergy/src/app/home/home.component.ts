import { Component, OnInit } from '@angular/core';
import { PieComponent } from '../pie/pie.component';
import { EncabezadoComponent } from '../encabezado/encabezado.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

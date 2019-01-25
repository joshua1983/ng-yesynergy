import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  nivel:string;
  actividad:string;
  unidad:string;
  isActividad:boolean;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    let usuario =JSON.parse( localStorage.getItem('user') );
    this.nivel = this.route.snapshot.paramMap.get('nivel');
    this.actividad = this.route.snapshot.paramMap.get('act');
    this.unidad = this.route.snapshot.paramMap.get('unidad');

    if (this.unidad == undefined || this.nivel == undefined){
      this.isActividad = false;
    }
    if (this.actividad != undefined){
      this.isActividad = true;
    }

  }

}

import { Component, OnInit } from '@angular/core';
import { MatriculaService } from '../_servicios/matricula.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-unidad',
  templateUrl: './unidad.component.html',
  styleUrls: ['./unidad.component.css']
})
export class UnidadComponent implements OnInit {

  unidades:any;
  nivel:string;
  libro:string;
  actividad:string;


  constructor(private matriculaService:MatriculaService, private route:ActivatedRoute) {

  }

  ngOnInit() {
    document.body.classList.add('fondo');
    let usuario =JSON.parse( localStorage.getItem('user') );
    this.nivel = this.route.snapshot.paramMap.get('nivel');
    this.actividad = this.route.snapshot.paramMap.get('act');
    this.matriculaService.getUnidades(usuario.usuidentificador, this.route.snapshot.paramMap.get('nivel')).subscribe(
      data => {
        this.unidades = data;
      }
    )

  }


}

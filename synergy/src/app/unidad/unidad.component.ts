import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
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

  constructor(private matriculaService:MatriculaService, private route:ActivatedRoute) {

  }

  ngOnInit() {
    let usuario =JSON.parse( localStorage.getItem('user') );

    this.matriculaService.getUnidades(usuario.usuidentificador, this.route.snapshot.paramMap.get('nivel')).subscribe(
      data => {
        this.unidades = data;
        console.log(this.unidades);
      }
    )

  }


}

import { Component, OnInit } from '@angular/core';
import { MatriculaService } from '../_servicios/matricula.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nivel',
  templateUrl: './nivel.component.html',
  styleUrls: ['./nivel.component.css']
})
export class NivelComponent implements OnInit {

  niveles:any;
  libro:string

  constructor(private matriculaService:MatriculaService, private route:ActivatedRoute) { }

  ngOnInit() {
    let usuario =JSON.parse( localStorage.getItem('user') );
    this.libro = this.route.snapshot.paramMap.get('libro');
    this.matriculaService.getNiveles(usuario.usuidentificador).subscribe(
      data => {
        this.niveles = data;
        console.log(this.niveles);
      }
    )

  }

}

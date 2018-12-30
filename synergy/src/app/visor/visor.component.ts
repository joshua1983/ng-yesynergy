import { Component, OnInit } from '@angular/core';
import { MatriculaService } from '../_servicios/matricula.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-visor',
  templateUrl: './visor.component.html',
  styleUrls: ['./visor.component.css']
})
export class VisorComponent implements OnInit {

  libro:string;
  nivel:string;
  unidad:string;
  contador:number =0;

  renderHTML:string;

  paginas:any;

  constructor(private route:ActivatedRoute, private matriculaService: MatriculaService) {
    this.contador =0;
  }

  ngOnInit() {
    this.nivel = this.route.snapshot.paramMap.get('nivel');
    this.libro = this.route.snapshot.paramMap.get('libro');
    this.unidad = this.route.snapshot.paramMap.get('unidad');

    this.matriculaService.getPaginas(this.libro,this.nivel,this.unidad).subscribe(
      data => {
        this.paginas = data;
        this.renderHTML = this.paginas[this.contador].html;
      }
    )
  }

  setHTML(html:string){
    this.renderHTML = html;
  }

  siguiente(){
    this.contador++;
    if (this.contador < this.paginas.lenght){
      this.setHTML(this.paginas[this.contador].html);
    }
  }

  anterior(){
    this.contador--;
    if (this.contador != 0 || this.contador > 0){
      this.setHTML(this.paginas[this.contador].html);
    }
  }

}

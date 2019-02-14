import { Component, OnInit, ViewChild } from '@angular/core';
import { MatriculaService } from '../_servicios/matricula.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-visor',
  templateUrl: './visor.component.html',
  styleUrls: ['./visor.component.css']
})
export class VisorComponent implements OnInit {

  @ViewChild('visorHtml') visorHTML;

  libro:string;
  nivel:string;
  unidad:string;
  material:string;
  contador:number =0;
  mensaje:string;
  opcion:string;

  renderHTML:string;
  paginas:any;
  tipo:string;

  visibleSig:boolean;
  visibleAnt:boolean;

  ids:string[] = ["","","","","","","",""];
  lbl:string[] = ["","","","","","","",""];
  val:string[] = ["","","","","","","",""];

  constructor(private route:ActivatedRoute, private matriculaService: MatriculaService) {
    this.contador =0;

  }

  ngOnInit() {
    this.libro = this.route.snapshot.paramMap.get('libro');
    this.nivel = this.route.snapshot.paramMap.get('nivel');
    this.unidad = this.route.snapshot.paramMap.get('unidad');
    this.opcion = this.route.snapshot.paramMap.get('actividad');

    if (this.opcion !='1'){
      this.matriculaService.getPaginas(this.libro,this.nivel,this.unidad).subscribe(
        data => {
          this.paginas = data;
console.log(data);
          if (this.paginas != undefined && this.paginas.length > 0){
            this.asignarDatos(this.contador);
            this.renderHTML = this.paginas[this.contador].html;
            this.tipo = this.paginas[this.contador].tipo;
            this.visibleAnt = false;
            this.visibleSig = true;
          }
        }
      )
    }else{
      this.material = this.route.snapshot.paramMap.get('libro');
      this.matriculaService.getPaginasMaterial(this.material,this.nivel).subscribe(
        data => {
          this.paginas = data;
          if (this.paginas != undefined && this.paginas.length > 0){
            this.asignarDatos(this.contador);
            this.renderHTML = this.paginas[this.contador].html;
            this.tipo = this.paginas[this.contador].tipo;
            this.material = this.paginas[this.contador].tipoMaterial;
            this.visibleAnt = false;
            this.visibleSig = true;
          }
        }
      )
    }
  }

  setHTML(html:string){
    this.renderHTML = html;
    this.tipo = this.paginas[this.contador].tipo;
  }

  siguiente(){
    this.mensaje = this.visorHTML.guardarRespuesta(this.libro,this.nivel,this.unidad,this.tipo, this.ids[this.contador], this.val[this.contador]);

    this.contador++;
    if (this.contador < this.paginas.length){
      this.visibleSig = true;
      this.asignarDatos(this.contador);
      this.setHTML(this.paginas[this.contador].html);
      if (this.contador != 0 || this.contador > 0){
        this.visibleAnt = true;
      }
    }else{
      this.visibleSig = false;
    }
    if ((this.contador +1 ) == this.paginas.length){
      this.visibleSig = false;
    }
  }

  anterior(){
    this.mensaje = this.visorHTML.guardarRespuesta(this.libro,this.nivel,this.unidad,this.tipo, this.ids[this.contador], this.val[this.contador]);
    this.contador--;
    if (this.contador != -1 || this.contador > 0){
      this.asignarDatos(this.contador);
      this.setHTML(this.paginas[this.contador].html);
      if (this.contador < this.paginas.length){
        this.visibleSig = true;
      }
    }else{
      this.visibleAnt = false;
    }
    if ((this.contador -1) < 0){
      this.visibleAnt = false;
    }
  }

  asignarDatos(pag:number){
    let pagina = this.paginas[pag];
    // asignacion de ids
    if (pagina != undefined){
      this.ids[0] = pagina.id1;
      this.ids[1] = pagina.id2;
      this.ids[2] = pagina.id3;
      this.ids[3] = pagina.id4;
      this.ids[4] = pagina.id5;
      this.ids[5] = pagina.id6;
      this.ids[6] = pagina.id7;
      this.ids[7] = pagina.id8;
      // asignacion de etiquetas
      this.lbl[0] = pagina.lbl1;
      this.lbl[1] = pagina.lbl2;
      this.lbl[2] = pagina.lbl3;
      this.lbl[3] = pagina.lbl4;
      this.lbl[4] = pagina.lbl5;
      this.lbl[5] = pagina.lbl6;
      this.lbl[6] = pagina.lbl7;
      this.lbl[7] = pagina.lbl8;
      // asignacion de valores
      this.val[0] = pagina.val1;
      this.val[1] = pagina.val2;
      this.val[2] = pagina.val3;
      this.val[3] = pagina.val4;
      this.val[4] = pagina.val5;
      this.val[5] = pagina.val6;
      this.val[6] = pagina.val7;
      this.val[7] = pagina.val8;
    }


  }

}

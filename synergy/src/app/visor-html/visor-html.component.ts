import { Component, OnInit, Input, ViewEncapsulation} from '@angular/core';
import { SanitizeHtmlPipe } from '../_guards/SanitizeHtmlPipe.transform';
import { RespuestasService } from '../_servicios/respuestas.service';

@Component({
  selector: 'visor-html',
  templateUrl: './visor-html.component.html',
  styleUrls: ['./visor-html.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class VisorHTMLComponent implements OnInit {

  @Input() htmlRender: String;
  @Input() tipo:string;
  @Input() ids:string[];
  @Input() lbl:string[];
  @Input() valor:string[];
  @Input() material:String;

  valorSeleccionado:string;


  constructor(private servicioRespuestas:RespuestasService) {
   }

  ngOnInit() {
  }

  setValorSeleccionado(valor:number){
    this.valorSeleccionado = this.valor[valor];
  }

  guardarRespuesta(libro:string, nivel:string, unidad:string, tipo:string, id:string, val:string):string{
    let usuario =JSON.parse( localStorage.getItem('user') );
    let i =0;
    console.log(usuario);
    if (tipo=="4"){
      this.ids.forEach(id => {
        if (id != undefined && id != ''){
          this.servicioRespuestas.guardarRespuestaTipo1(libro,unidad,nivel,id,this.valor[i],usuario.usuidentificador)
          .subscribe(
            data =>{
              console.log(data);
            }
          );
        }
        i++;
      });

      return "";

    }
    if (tipo=="1" || tipo=="2"){
      this.servicioRespuestas.guardarRespuestaTipo1(libro,unidad,nivel,id,this.valorSeleccionado,usuario.usuidentificador)
        .subscribe(
          data => {
            console.log(data)
          }
        );
      return "";
    }
  }

}

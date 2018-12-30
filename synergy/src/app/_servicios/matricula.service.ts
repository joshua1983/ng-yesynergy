import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable()
export class MatriculaService{
  constructor(private http: HttpClient){}


  getNiveles(id:string){
    let url = "http://admin.yesynergy.com/index.php/mobile/getNivelesEstudiante/"+id;
    return this.http.get(url);
  }

  getUnidades(id:string, nivel:string){

    let url = "http://admin.yesynergy.com/index.php/mobile/getUnidadesEstudiante/"+id+"/"+nivel;
    return this.http.get(url);

  }

  getPaginas(libro:string, nivel:string, unidad:string){
    let url = "http://admin.yesynergy.com/index.php/mobile/getPaginasJSON/"+nivel+"/"+unidad+"/"+libro;
    return this.http.get(url);
  }

}

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
    console.log(url);
    return this.http.get(url);
  }

  getPaginasMaterial(material:string, nivel:string){
    let codMaterial = 1;
    console.log(material);
    if (material == 'audiovisual'){
      codMaterial = 1;
    }
    if (material == 'grammar'){
      codMaterial = 2;
    }
    if (material == 'bonus'){
      codMaterial = 4;
    }

    let url = "http://admin.yesynergy.com/index.php/mobile/getPaginasJSONmaterial/"+codMaterial+"/"+nivel;
    console.log(url);
    return this.http.get(url);
  }

}

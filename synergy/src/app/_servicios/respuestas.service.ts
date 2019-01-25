import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable()
export class RespuestasService{
  constructor(private http: HttpClient){}


  guardarRespuestaTipo1(
    libro:string,
    unidad:string,
    nivel:string,
    control:string,
    valor:string,
    usuario:string
  ): Observable<any>{
    let url = "http://admin.yesynergy.com/index.php/mobile/guardarRespuesta";
    let body = new FormData;
    body.append('libro', libro);
    body.append('unidad', unidad);
    body.append('nivel', nivel);
    body.append('idControl', control);
    body.append('valControl', valor);
    body.append('idUsuario', usuario);

    return this.http.post<any>(url,body);

  }

}

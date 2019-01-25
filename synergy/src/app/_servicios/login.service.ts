import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable()
export class LoginService{
  constructor(private http: HttpClient){}

  login(usuario: string, password: string){

    let body = new FormData;
    body.append('usuario', usuario);
    body.append('password', password);

    return this.http.post<any>('http://admin.yesynergy.com/index.php/mobile/autenticarEstudiante',body)
    .pipe(map(user => {
      if (user){
        if (user.error == 1){
          return user.error;
        }else{
          localStorage.setItem('user',JSON.stringify(user.usuario));
        }
      }
      return user;
    }))
  }
  logout(){
    localStorage.removeItem('user');
  }

  isLogged(){
    return localStorage.getItem('user') != null;
  }
}

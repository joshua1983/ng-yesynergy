import { Component, OnInit } from '@angular/core';
import { MatriculaService } from '../_servicios/matricula.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  niveles:any;
  libro:string
  constructor(private matriculaService:MatriculaService) { }

  ngOnInit() {
    document.body.classList.add('fondo');
    let usuario =JSON.parse( localStorage.getItem('user') );
    this.matriculaService.getNiveles(usuario.usuidentificador).subscribe(
      data => {
        this.niveles = data;
        console.log(this.niveles);
      }
    )
  }

}

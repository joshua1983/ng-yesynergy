import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {

  nivel:string;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.nivel = this.route.snapshot.paramMap.get('nivel');
  }

}

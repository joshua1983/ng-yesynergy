import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'visor-html',
  templateUrl: './visor-html.component.html',
  styleUrls: ['./visor-html.component.css']
})
export class VisorHTMLComponent implements OnInit {

  @Input()
  htmlRender: String;

  constructor() { }

  ngOnInit() {

  }

}

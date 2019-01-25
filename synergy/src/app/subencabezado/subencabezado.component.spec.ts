import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubencabezadoComponent } from './subencabezado.component';

describe('SubencabezadoComponent', () => {
  let component: SubencabezadoComponent;
  let fixture: ComponentFixture<SubencabezadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubencabezadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubencabezadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

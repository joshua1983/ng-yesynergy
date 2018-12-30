import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisorHTMLComponent } from './visor-html.component';

describe('VisorHTMLComponent', () => {
  let component: VisorHTMLComponent;
  let fixture: ComponentFixture<VisorHTMLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisorHTMLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisorHTMLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

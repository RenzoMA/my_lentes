import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoMesComponent } from './ingreso-mes.component';

describe('IngresoMesComponent', () => {
  let component: IngresoMesComponent;
  let fixture: ComponentFixture<IngresoMesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresoMesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

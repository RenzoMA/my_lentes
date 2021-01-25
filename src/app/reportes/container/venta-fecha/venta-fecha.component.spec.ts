import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaFechaComponent } from './venta-fecha.component';

describe('VentaFechaComponent', () => {
  let component: VentaFechaComponent;
  let fixture: ComponentFixture<VentaFechaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentaFechaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentaFechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

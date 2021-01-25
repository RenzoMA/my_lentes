import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaMarcaComponent } from './venta-marca.component';

describe('VentaMarcaComponent', () => {
  let component: VentaMarcaComponent;
  let fixture: ComponentFixture<VentaMarcaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentaMarcaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentaMarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

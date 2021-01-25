import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaCanalComponent } from './venta-canal.component';

describe('VentaCanalComponent', () => {
  let component: VentaCanalComponent;
  let fixture: ComponentFixture<VentaCanalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentaCanalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentaCanalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './container/main/main.component';
import { VentasRoutingModule } from './ventas-routing.module';
import { MaterialModule } from '../material/material.module';
import { NuevaVentaComponent } from './container/nueva-venta/nueva-venta.component';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [MainComponent, NuevaVentaComponent, AgregarProductoComponent],
  imports: [CommonModule, VentasRoutingModule, MaterialModule, ReactiveFormsModule],

})
export class VentasModule { }

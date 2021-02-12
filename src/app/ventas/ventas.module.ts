import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './container/main/main.component';
import { VentasRoutingModule } from './ventas-routing.module';
import { MaterialModule } from '../material/material.module';
import { NuevaVentaComponent } from './container/nueva-venta/nueva-venta.component';
import { EditarVentaComponent } from './container/editar-venta/editar-venta.component';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';



@NgModule({
  declarations: [MainComponent, NuevaVentaComponent, EditarVentaComponent, AgregarProductoComponent],
  imports: [CommonModule, VentasRoutingModule, MaterialModule],
  
})
export class VentasModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './container/main/main.component';
import { InventarioRoutingModule } from './inventario-routing.module';
import { MaterialModule } from '../material/material.module';
import { NuevoProductoComponent } from './container/nuevo-producto/nuevo-producto.component';



@NgModule({
  declarations: [MainComponent, NuevoProductoComponent],
  imports: [
    CommonModule,
    InventarioRoutingModule,
    MaterialModule
  ]
})
export class InventarioModule { }

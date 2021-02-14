import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './container/main/main.component';
import { InventarioRoutingModule } from './inventario-routing.module';
import { MaterialModule } from '../material/material.module';
import { NuevoProductoComponent } from './container/nuevo-producto/nuevo-producto.component';
import { EditarProductoComponent } from './container/editar-producto/editar-producto.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [MainComponent, NuevoProductoComponent, EditarProductoComponent],
  imports: [
    CommonModule,
    InventarioRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class InventarioModule { }

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainComponent } from "./container/main/main.component";
import { ClientesRoutingModule } from "./clientes-routing.module";
import { MaterialModule } from '../material/material.module';
import { NuevoClienteComponent } from './container/nuevo-cliente/nuevo-cliente.component';
import { EditarClienteComponent } from './container/editar-cliente/editar-cliente.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MainComponent, NuevoClienteComponent, EditarClienteComponent],
  imports: [CommonModule, ClientesRoutingModule, MaterialModule, ReactiveFormsModule],
})
export class ClientesModule {}

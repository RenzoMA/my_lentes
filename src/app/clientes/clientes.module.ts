import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainComponent } from "./container/main/main.component";
import { ClientesRoutingModule } from "./clientes-routing.module";
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, ClientesRoutingModule, MaterialModule],
})
export class ClientesModule {}

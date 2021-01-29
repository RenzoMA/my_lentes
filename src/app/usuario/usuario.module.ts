import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainComponent } from "./container/main/main.component";
import { UsuarioRoutingModule } from "./usuario-routing.module";
import { MaterialModule } from "../material/material.module";
import { NuevoUsuarioComponent } from "./container/nuevo-usuario/nuevo-usuario.component";

@NgModule({
  declarations: [MainComponent, NuevoUsuarioComponent],
  imports: [CommonModule, UsuarioRoutingModule, MaterialModule],
})
export class UsuarioModule {}

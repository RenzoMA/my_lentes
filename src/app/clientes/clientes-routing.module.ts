import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./container/main/main.component";
import { NuevoClienteComponent } from './container/nuevo-cliente/nuevo-cliente.component';

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
  },
  {
    path: "nuevo",
    component: NuevoClienteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientesRoutingModule {}

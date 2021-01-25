import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./container/main/main.component";
import { NuevoClienteComponent } from "./container/nuevo-cliente/nuevo-cliente.component";
import { EditarClienteComponent } from './container/editar-cliente/editar-cliente.component';

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    pathMatch: 'full'
  },
  {
    path: "nuevo",
    component: NuevoClienteComponent,
  },
  {
    path: "editar/:id",
    component: EditarClienteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientesRoutingModule {}

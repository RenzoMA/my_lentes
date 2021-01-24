import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./container/main/main.component";
import { NuevoProductoComponent } from "./container/nuevo-producto/nuevo-producto.component";
import { EditarProductoComponent } from './container/editar-producto/editar-producto.component';

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
  },
  {
    path: "nuevo",
    component: NuevoProductoComponent,
  },
  {
    path: "editar/:id",
    component: EditarProductoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventarioRoutingModule {}

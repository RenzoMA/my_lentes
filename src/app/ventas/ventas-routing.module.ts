import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from './container/main/main.component';
import { NuevaVentaComponent } from "./container/nueva-venta/nueva-venta.component";

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
  },
  {
    path: "nuevo",
    component: NuevaVentaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VentasRoutingModule {}

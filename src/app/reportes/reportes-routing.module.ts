import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./container/main/main.component";
import { VentaFechaComponent } from "./container/venta-fecha/venta-fecha.component";
import { VentaMarcaComponent } from "./container/venta-marca/venta-marca.component";

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
  },
  {
    path: "busquedaVentaFecha",
    component: VentaFechaComponent,
  },
  {
    path: "busquedaVentaMarca",
    component: VentaMarcaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportesRoutingModule {}

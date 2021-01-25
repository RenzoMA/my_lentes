import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from './container/main/main.component';
import { VentaFechaComponent } from "./container/venta-fecha/venta-fecha.component";
import { VentaMarcaComponent } from "./container/venta-marca/venta-marca.component";
import { IngresoMesComponent } from "./container/ingreso-mes/ingreso-mes.component";
import { VentaCanalComponent } from "./container/venta-canal/venta-canal.component";
import { InventarioComponent } from "./container/inventario/inventario.component";
import { ClienteComponent } from "./container/cliente/cliente.component";

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
  {
    path: "busquedaIngresoMe",
    component: IngresoMesComponent,
  },
  {
    path: "busquedaVentaCanal",
    component: VentaCanalComponent,
  },

  {
    path: "busquedaInventario",
    component: InventarioComponent,
  },

  {
    path: "buscarInventario",
    component: ClienteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportesRoutingModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainComponent } from "./container/main/main.component";
import { ReportesRoutingModule } from "./reportes-routing.module";
import { MaterialModule } from "../material/material.module";
import { VentaFechaComponent } from "./container/venta-fecha/venta-fecha.component";
import { VentaMarcaComponent } from "./container/venta-marca/venta-marca.component";
import { IngresoMesComponent } from "./container/ingreso-mes/ingreso-mes.component";
import { VentaCanalComponent } from "./container/venta-canal/venta-canal.component";
import { InventarioComponent } from "./container/inventario/inventario.component";
import { ClienteComponent } from "./container/cliente/cliente.component";

@NgModule({
  declarations: [
    MainComponent,
    VentaFechaComponent,
    VentaMarcaComponent,
    IngresoMesComponent,
    VentaCanalComponent,
    InventarioComponent,
    ClienteComponent,
  ],
  imports: [CommonModule, ReportesRoutingModule, MaterialModule],
})
export class ReportesModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainComponent } from "./container/main/main.component";
import { ReportesRoutingModule } from "./reportes-routing.module";
import { MaterialModule } from "../material/material.module";
import { VentaFechaComponent } from "./container/venta-fecha/venta-fecha.component";
import { VentaMarcaComponent } from "./container/venta-marca/venta-marca.component";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MainComponent, VentaFechaComponent, VentaMarcaComponent],
  imports: [
    CommonModule,
    ReportesRoutingModule,
    MaterialModule,
    NgxChartsModule,
    ReactiveFormsModule
  ],
})
export class ReportesModule {}

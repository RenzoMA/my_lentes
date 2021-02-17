import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { VentaService } from "../../../services/venta.service";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-venta-fecha",
  templateUrl: "./venta-fecha.component.html",
  styleUrls: ["./venta-fecha.component.scss"],
})
export class VentaFechaComponent implements OnInit {
  single: any[];
  view: any[] = [500, 400];

  // options
  showLegend: boolean = true;
  showLabels: boolean = true;

  colorScheme = {
    domain: ["#5AA454", "#E44D25", "#CFC0BB", "#7aa3e5", "#a8385d", "#aae3f5"],
  };

  inicio = new FormControl(new Date(), [Validators.required]);
  fin = new FormControl(new Date(), [Validators.required]);
  data: { name: string; value: number }[];
  constructor(private location: Location, private ventaService: VentaService) {}

  ngOnInit(): void {}
  loadVentas() {
    this.ventaService
      .getVentaParams(
        null,
        "",
        "",
        "",
        this.inicio.value.toISOString(),
        this.fin.value.toISOString(),
        10000000,
        1
      )
      .subscribe((results) => {
        this.data = results.reduce((current, next) => {
          const find = current.find((item) => item.name === next.canal);
          if (find) {
            find.value += next.total;
          } else {
            current.push({ name: next.canal, value: next.total });
          }
          return current;
        }, []);
      });
  }
  cancel(event: MouseEvent) {
    this.location.back();
  }
  isDisabled() {
    return this.inicio.invalid || this.fin.invalid;
  }
  borrar() {
    this.inicio.reset();
    this.fin.reset();
  }
}

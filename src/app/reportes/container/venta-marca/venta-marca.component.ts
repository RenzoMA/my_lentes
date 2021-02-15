import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { MarcaService } from "../../../services/marca.service";
import { CanalService } from "../../../services/canal.service";
import { Marca } from "../../../models/marca.model";
import { Canal } from "../../../models/canal.model";
import { FormControl, Validators } from "@angular/forms";
import { VentaService } from "../../../services/venta.service";
@Component({
  selector: "app-venta-marca",
  templateUrl: "./venta-marca.component.html",
  styleUrls: ["./venta-marca.component.scss"],
})
export class VentaMarcaComponent implements OnInit {
  marcas: Marca[] = [];
  canales: Canal[] = [];
  marca = new FormControl("", [Validators.required]);
  canal = new FormControl("", [Validators.required]);
  constructor(
    private location: Location,
    private marcaService: MarcaService,
    private canalService: CanalService,
    private ventaService: VentaService
  ) {}

  ngOnInit(): void {
    this.marcaService.getMarcas().subscribe((items) => {
      this.marcas = items;
    });
    this.canalService.getCanales().subscribe((items) => {
      this.canales = items;
    });
  }

  cancel(event: MouseEvent) {
    this.location.back();
  }
  isDisabled() {
    return this.marca.invalid || this.canal.invalid;
  }
  submit() {
    this.ventaService
      .getVentaMarcaCanal(this.marca.value, this.canal.value)
      .subscribe((results) => {
        console.log(results);
      });
  }
}

import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { CanalService } from "../../../services/canal.service";
import { Observable } from "rxjs";
import { Canal } from "../../../models/canal.model";
import { VentaService } from "../../../services/venta.service";
import { Venta } from "../../../models/venta.model";
import { FormGroup, FormControl } from "@angular/forms";
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
  selectedId = 0;
  page: number = 1;
  pageSize: number = 10;
  displayedColumns: string[] = [
    "codigo",
    "cliente",
    "documento",
    "fventa",
    "total",
    "estado",
    "canal",
  ];
  dataSource: Venta[] = [];
  canales$: Observable<Canal[]>;
  ventas$: Observable<Venta[]>;
  today = new Date();
  tomorrow = new Date();
  filterGroup: FormGroup;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private canalService: CanalService,
    private ventaService: VentaService
  ) {
    this.filterGroup = new FormGroup({
      nombreCliente: new FormControl(""),
      documento: new FormControl(""),
      inicio: new FormControl(),
      fin: new FormControl(),
      estado: new FormControl(""),
      canal: new FormControl(""),
    });
  }
  search() {
    this.loadVentas();
  }
  ngOnInit(): void {
    this.canales$ = this.canalService.getCanales();
    this.loadVentas();
  }
  pageChange(event: PageEvent) {
    this.page = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.loadVentas();
  }
  borrar() {
    this.filterGroup = new FormGroup({
      nombreCliente: new FormControl(""),
      documento: new FormControl(""),
      inicio: new FormControl(),
      fin: new FormControl(),
      estado: new FormControl(""),
      canal: new FormControl(""),
    });
  }
  loadVentas() {
    const nombre = this.filterGroup.get("nombreCliente").value;
    const documento = this.filterGroup.get("documento").value;
    const estado = this.filterGroup.get("estado").value;
    const canal = this.filterGroup.get("canal").value;

    const fechaInicio = this.filterGroup.get("inicio").value;
    const fechaFin = this.filterGroup.get("fin").value;

    this.ventaService
      .getVentaParams(
        estado,
        nombre,
        documento,
        canal,
        fechaInicio ? fechaInicio.toISOString() : fechaInicio,
        fechaFin ? fechaFin.toISOString() : fechaFin,
        this.pageSize,
        this.page
      )
      .subscribe((ventas) => {
        this.dataSource = ventas;
      });
  }

  nuevaVenta(event: MouseEvent) {
    this.router.navigate(["nuevo"], { relativeTo: this.route });
  }

  updateSelected(row: Venta) {
    if (this.selectedId === row.codigo) {
      this.selectedId = 0;
    } else {
      this.selectedId = row.codigo;
    }
  }

  modificarVenta(event: MouseEvent) {
    this.router.navigate(["editar", this.selectedId], {
      relativeTo: this.route,
    });
  }

  anularVenta() {
    if (this.selectedId) {
      this.ventaService.delete(this.selectedId).subscribe(() => {
        this.loadVentas();
      });
    }
  }
}

import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { CanalService } from "../../../services/canal.service";
import { Observable } from "rxjs";
import { Canal } from "../../../models/canal.model";
import { VentaService } from "../../../services/venta.service";
import { Venta } from "../../../models/venta.model";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
  selectedId = 0;
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
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private canalService: CanalService,
    private ventaService: VentaService
  ) {}

  ngOnInit(): void {
    this.canales$ = this.canalService.getCanales();
    this.loadVentas();
  }

  loadVentas() {
    this.ventaService.getVentas().subscribe((ventas) => {
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

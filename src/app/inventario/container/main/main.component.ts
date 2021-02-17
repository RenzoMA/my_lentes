import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ProductoService } from "../../../services/producto.service";
import { Producto } from "../../../models/producto.model";
import { FormControl } from "@angular/forms";
import { TipoProducto } from "../../../models/tipo-producto.model";
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
  page: number = 1;
  pageSize: number = 10;
  selectedId = 0;
  displayedColumns: string[] = [
    "codigo",
    "descripcion",
    "tipo",
    "marca",
    "stock",
  ];
  dataSource: Producto[] = [];
  codigo = new FormControl("");
  descripcion = new FormControl("");
  tipo = new FormControl("");

  tipoProducto: TipoProducto[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productoService: ProductoService
  ) {}

  ngOnInit(): void {
    this.loadProducto();
    this.productoService.getTipoProducto().subscribe((items) => {
      this.tipoProducto = items;
    });
  }

  loadProducto() {
    const codigo = this.codigo.value;
    const descripcion = this.descripcion.value;
    const tipo = this.tipo.value;
    this.productoService
      .getProductos(
        codigo,
        descripcion,
        this.page,
        this.pageSize,
        tipo
      )
      .subscribe((productos) => {
        this.dataSource = productos;
      });
  }

  pageChange(event: PageEvent) {
    this.page = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.loadProducto();
  }

  deleteProduct() {
    this.productoService.delete(this.selectedId).subscribe(() => {
      this.loadProducto();
    });
  }
  borrar() {
    this.codigo.setValue("");
    this.descripcion.setValue("");
    this.tipo.setValue("");
  }
  search() {
    this.loadProducto();
  }
  nuevoProducto(event: MouseEvent) {
    this.router.navigate(["nuevo"], { relativeTo: this.route });
  }
  modificarProducto(event: MouseEvent) {
    this.router.navigate(["editar", this.selectedId], {
      relativeTo: this.route,
    });
  }
  updateSelected(row: Producto) {
    if (this.selectedId === row.codigo) {
      this.selectedId = 0;
    } else {
      this.selectedId = row.codigo;
    }
  }
}

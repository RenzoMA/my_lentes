import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ProductoService } from "../../../services/producto.service";
import { Producto } from "../../../models/producto.model";
import { FormControl } from "@angular/forms";
import { TipoProducto } from "../../../models/tipo-producto.model";

// export interface Producto {
//   codigo: string;
//   descripcion: string;
//   tipo: string;
//   marca: string;
//   stock: number;
// }

// const ELEMENT_DATA: Producto[] = [
//   { codigo: "1", descripcion: "test", marca: "test", stock: 10, tipo: "test" },
//   { codigo: "2", descripcion: "test", marca: "test", stock: 10, tipo: "test" },
//   { codigo: "3", descripcion: "test", marca: "test", stock: 10, tipo: "test" },
//   { codigo: "4", descripcion: "test", marca: "test", stock: 10, tipo: "test" },
//   { codigo: "5", descripcion: "test", marca: "test", stock: 10, tipo: "test" },
// ];

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
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
    const producto = this.codigo.value;
    const descripcion = this.descripcion.value;
    const tipo = this.tipo.value;
    this.productoService
      .getProductos(tipo + descripcion + producto)
      .subscribe((productos) => {
        this.dataSource = productos;
      });
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

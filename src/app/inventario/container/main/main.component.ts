import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

export interface Producto {
  codigo: string;
  descripcion: string;
  tipo: string;
  marca: string;
  stock: number;
}

const ELEMENT_DATA: Producto[] = [
  { codigo: "1", descripcion: "test", marca: "test", stock: 10, tipo: "test" },
  { codigo: "2", descripcion: "test", marca: "test", stock: 10, tipo: "test" },
  { codigo: "3", descripcion: "test", marca: "test", stock: 10, tipo: "test" },
  { codigo: "4", descripcion: "test", marca: "test", stock: 10, tipo: "test" },
  { codigo: "5", descripcion: "test", marca: "test", stock: 10, tipo: "test" },
];

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
  selectedId = "";
  displayedColumns: string[] = [
    "codigo",
    "descripcion",
    "tipo",
    "marca",
    "stock",
  ];
  dataSource = ELEMENT_DATA;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  nuevoProducto(event: MouseEvent) {
    this.router.navigate(["nuevo"], { relativeTo: this.route });
  }
  modificarProducto(event: MouseEvent) {
    this.router.navigate(["editar", this.selectedId], {relativeTo: this.route});
  }
  updateSelected(row: Producto) {
    if (this.selectedId === row.codigo) {
      this.selectedId = "";
    } else {
      this.selectedId = row.codigo;
    }
  }
}

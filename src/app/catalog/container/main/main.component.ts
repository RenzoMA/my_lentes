import { Component, OnInit } from "@angular/core";
import { ProductoService } from "../../../services/producto.service";
import { Producto } from "../../../models/producto.model";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
  productos: Producto[] = [];
  constructor(private producttService: ProductoService) {}

  ngOnInit(): void {
    this.loadProducts();
  }
  loadProducts() {
    this.producttService.getCatalog().subscribe((items) => {
      this.productos = items;
    });
  }
}

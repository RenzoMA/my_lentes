import { Component, OnInit, Input } from "@angular/core";
import { Producto } from "../../../models/producto.model";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
})
export class ProductComponent implements OnInit {
  @Input() producto: Producto;
  imgpath = `./assets/img/productos/lent${this.getRandomInt(10)}.jpg`;
  constructor() {}

  ngOnInit(): void {}
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  getUrl() {
    if (this.producto.imagen && this.producto.imagen.indexOf("http") > -1) {
      return this.producto.imagen;
    } else {
      return this.imgpath;
    }
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Product } from "../../models/product";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() addToCart: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}
}

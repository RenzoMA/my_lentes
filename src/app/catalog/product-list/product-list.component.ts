import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Product } from "../../models/product";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[];
  @Output() addToCart: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}
}

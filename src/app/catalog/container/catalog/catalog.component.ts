import { Component, OnInit } from "@angular/core";
import { Product } from "../../../models/product";
import { CatalogService } from "../../services/catalog.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-catalog",
  templateUrl: "./catalog.component.html",
  styleUrls: ["./catalog.component.scss"],
})
export class CatalogComponent implements OnInit {
  products$: Observable<Product[]>;
  constructor(private catalogService: CatalogService) {
    this.products$ = catalogService.getProductList();
  }

  ngOnInit(): void {}

  addToCart(id: string) {
    this.catalogService.addToCart(id);
  }
}

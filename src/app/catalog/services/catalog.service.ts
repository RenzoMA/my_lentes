import { Injectable } from "@angular/core";
import { AppStateService } from "../../state/app-state";

@Injectable({
  providedIn: "root",
})
export class CatalogService {
  constructor(private stateService: AppStateService) {}

  addToCart(id: string) {
    const products = this.stateService.getCurrentState("products");
    const product = products.find((prd) => prd.id === id);
    const cartItems = this.stateService.getCurrentState("myCart");
    const result = cartItems.concat(product);
    this.stateService.updateState({ myCart: result });
  }

  getProductList() {
    return this.stateService.select((item) => item.products);
  }
}

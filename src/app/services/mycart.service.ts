import { Injectable } from "@angular/core";
import { AppStateService } from "../state/app-state";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class MyCartService {
  constructor(private stateService: AppStateService) {}

  getCartItemCount() {
    return this.stateService
      .select((item) => item.myCart)
      .pipe(map((item) => item.length));
  }
}

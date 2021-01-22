import { Component } from "@angular/core";
import { MyCartService } from "./services/mycart.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  myCartCount: Observable<number>;
  constructor(private MyCartService: MyCartService) {
    this.myCartCount = MyCartService.getCartItemCount();
  }
}

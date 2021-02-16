import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { SessionService } from "./services/session.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(private sessionService: SessionService, private router: Router) {}
  getUserName() {
    return this.sessionService.getUser()?.usuario || "";
  }
  getIsLoggedIn() {
    return this.sessionService.isLoggedIn();
  }
  cerrarSession() {
    this.sessionService.logOut();
    this.router.navigate(["auth"]);
  }
}

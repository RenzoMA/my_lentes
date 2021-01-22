import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  @Input() itemQuantity = 0;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  toProfile(event: MouseEvent) {
    event.preventDefault();
    this.router.navigate(["auth/profile"]);
  }
}

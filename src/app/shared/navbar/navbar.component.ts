import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  @Output() menuClick: EventEmitter<void> = new EventEmitter<void>();
  @Input() userName: string;
  @Input() isLoggedIn: boolean = false;
  @Output() cerrarSession: EventEmitter<void> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  wasup() {
    window.open(
      "https://api.whatsapp.com/send/?phone=51988297192&text=Quiero+chatear+con+alguien%2C+por+favor&app_absent=0",
      "_blank"
    );
  }
}

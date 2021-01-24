import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";

@Component({
  selector: "app-nuevo-cliente",
  templateUrl: "./nuevo-cliente.component.html",
  styleUrls: ["./nuevo-cliente.component.scss"],
})
export class NuevoClienteComponent implements OnInit {
  constructor(private location: Location) {}

  ngOnInit(): void {}
  cancel(event: MouseEvent) {
    this.location.back();
  }
}

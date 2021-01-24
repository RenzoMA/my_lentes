import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";

@Component({
  selector: "app-editar-cliente",
  templateUrl: "./editar-cliente.component.html",
  styleUrls: ["./editar-cliente.component.scss"],
})
export class EditarClienteComponent implements OnInit {
  constructor(private location: Location) {}

  ngOnInit(): void {}
  cancel(event: MouseEvent) {
    this.location.back();
  }
}

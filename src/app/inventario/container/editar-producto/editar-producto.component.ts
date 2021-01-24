import { Component, OnInit } from "@angular/core";
import { Location } from '@angular/common';

@Component({
  selector: "app-editar-producto",
  templateUrl: "./editar-producto.component.html",
  styleUrls: ["./editar-producto.component.scss"],
})
export class EditarProductoComponent implements OnInit {
  constructor(private location: Location) {}

  ngOnInit(): void {}
  cancel(event: MouseEvent) {
    this.location.back();
  }
}

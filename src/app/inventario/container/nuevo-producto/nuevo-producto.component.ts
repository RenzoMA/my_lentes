import { Component, OnInit } from "@angular/core";
import { Location } from '@angular/common';

@Component({
  selector: "app-nuevo-producto",
  templateUrl: "./nuevo-producto.component.html",
  styleUrls: ["./nuevo-producto.component.scss"],
})
export class NuevoProductoComponent implements OnInit {
  constructor(private location: Location) {}

  ngOnInit(): void {}
  cancel(event: MouseEvent) {
    this.location.back();
  }
}
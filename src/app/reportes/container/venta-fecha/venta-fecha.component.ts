import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common"

@Component({
  selector: 'app-venta-fecha',
  templateUrl: './venta-fecha.component.html',
  styleUrls: ['./venta-fecha.component.scss']
})
export class VentaFechaComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }
  cancel(event: MouseEvent) {
    this.location.back();
  }
}

import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common"
@Component({
  selector: 'app-venta-marca',
  templateUrl: './venta-marca.component.html',
  styleUrls: ['./venta-marca.component.scss']
})
export class VentaMarcaComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }
  cancel(event: MouseEvent) {
    this.location.back();
  }
}

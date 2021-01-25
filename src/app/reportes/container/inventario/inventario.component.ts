import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common"

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.scss']
})
export class InventarioComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }
  cancel(event: MouseEvent) {
    this.location.back();
  }
}

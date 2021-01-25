import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common"

@Component({
  selector: 'app-venta-canal',
  templateUrl: './venta-canal.component.html',
  styleUrls: ['./venta-canal.component.scss']
})
export class VentaCanalComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }
  cancel(event: MouseEvent) {
    this.location.back();
  }
}

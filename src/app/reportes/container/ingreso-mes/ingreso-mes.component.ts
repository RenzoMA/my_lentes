import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common"

@Component({
  selector: 'app-ingreso-mes',
  templateUrl: './ingreso-mes.component.html',
  styleUrls: ['./ingreso-mes.component.scss']
})
export class IngresoMesComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }
  cancel(event: MouseEvent) {
    this.location.back();
  }
}

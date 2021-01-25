import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common"

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }
  cancel(event: MouseEvent) {
    this.location.back();
  }
}

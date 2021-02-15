import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  buscarVentaFecha(event: MouseEvent) {
    this.router.navigate(["busquedaVentaFecha"], { relativeTo: this.route });
  }
  buscarVentaMarca(event: MouseEvent) {
    this.router.navigate(["busquedaVentaMarca"], { relativeTo: this.route });
  }

}

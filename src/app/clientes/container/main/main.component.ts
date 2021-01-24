import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

export interface Cliente {
  codigo: string;
  nombre: string;
  tipo: string;
  categoria: string;
  canal: string;
}

const ELEMENT_DATA: Cliente[] = [];

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
  displayedColumns: string[] = [
    "codigo",
    "nombre",
    "tipo",
    "categoria",
    "canal",
  ];
  dataSource = ELEMENT_DATA;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  nuevoCliente(event: MouseEvent) {
    this.router.navigate(["nuevo"], { relativeTo: this.route });
  }
}

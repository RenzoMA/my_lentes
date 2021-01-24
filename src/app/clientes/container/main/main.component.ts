import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

export interface Cliente {
  codigo: string;
  nombre: string;
  tipo: string;
  categoria: string;
  canal: string;
}

const ELEMENT_DATA: Cliente[] = [
  {
    codigo: "1",
    tipo: "test",
    canal: "canal",
    categoria: "category",
    nombre: "my name",
  },
  {
    codigo: "2",
    tipo: "test",
    canal: "canal",
    categoria: "category",
    nombre: "my name",
  },
  {
    codigo: "3",
    tipo: "test",
    canal: "canal",
    categoria: "category",
    nombre: "my name",
  },
  {
    codigo: "4",
    tipo: "test",
    canal: "canal",
    categoria: "category",
    nombre: "my name",
  },
];

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
  selectedId = "";
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
  updateSelected(row: Cliente) {
    if (this.selectedId === row.codigo) {
      this.selectedId = "";
    } else {
      this.selectedId = row.codigo;
    }
  }
  modificarCliente(event: MouseEvent) {
    this.router.navigate(["editar", this.selectedId], {relativeTo: this.route});
  }
}

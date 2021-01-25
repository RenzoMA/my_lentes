import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

export interface Venta {
  codigo: string;
  cliente: string;
  documento: string;
  fventa: string;
  total: string;
  estado: string;
  canal: string
}

const ELEMENT_DATA: Venta[] = [
  {
    codigo: "1",
    cliente: "Victor Morillo",
    documento: "12345678",
    fventa: "2020/12/05",
    total: "category",
    estado: "Entregado",
    canal: "Facebook",
  },
  {
    codigo: "2",
    cliente: "Juan Perez",
    documento: "12345678",
    fventa: "2020/12/05",
    total: "category",
    estado: "Entregado",
    canal: "Facebook",
  },
  {
    codigo: "3",
    cliente: "Carlos Sanchez",
    documento: "12345678",
    fventa: "2020/12/05",
    total: "category",
    estado: "Compra",
    canal: "Facebook",
  },
  {
    codigo: "4",
    cliente: "Johana Gutierrez",
    documento: "12345678",
    fventa: "2020/12/05",
    total: "category",
    estado: "Compra",
    canal: "Facebook",
  },
  {
    codigo: "5",
    cliente: "Jorge Valladares",
    documento: "12345678",
    fventa: "2020/12/05",
    total: "category",
    estado: "Compra",
    canal: "Facebook",
  },
];


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  selectedId = "";
  displayedColumns: string[] = [
    "codigo",
    "cliente",
    "documento",
    "fventa",
    "total",
    "estado",
    "canal",
  ];
  dataSource = ELEMENT_DATA;
  constructor(private router: Router, private route: ActivatedRoute) {
   }

  ngOnInit(): void {
  }
  nuevaVenta(event: MouseEvent) {
    this.router.navigate(["nuevo"], { relativeTo: this.route });
  }
  updateSelected(row: Venta) {
    if (this.selectedId === row.codigo) {
      this.selectedId = "";
    } else {
      this.selectedId = row.codigo;
    }
  }
  modificarVenta(event: MouseEvent) {
    this.router.navigate(["editar", this.selectedId], {relativeTo: this.route});
  }
}

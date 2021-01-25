import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

export interface NuevaVenta {
  codigo: string;
  descripcion: string;
  marca: string;
  color: string;
  punitario: string;
  cantidad: string;
  total: string;
}

const ELEMENT_DATA: NuevaVenta[] = [
  {
    codigo: "1",
    descripcion: "lentes",
    marca: "Ray-Ban",
    color: "azul",
    punitario: "S/ 250",
    cantidad: "1",
    total: "S/ 250",
  },
  {
    codigo: "1",
    descripcion: "lentes",
    marca: "Ray-Ban",
    color: "azul",
    punitario: "S/ 250",
    cantidad: "1",
    total: "S/ 250",
  },
  {
    codigo: "1",
    descripcion: "lentes",
    marca: "Ray-Ban",
    color: "azul",
    punitario: "S/ 250",
    cantidad: "1",
    total: "S/ 250",
  },
  {
    codigo: "1",
    descripcion: "lentes",
    marca: "Ray-Ban",
    color: "azul",
    punitario: "S/ 250",
    cantidad: "1",
    total: "S/ 250",
  },
];

@Component({
  selector: 'app-nueva-venta',
  templateUrl: './nueva-venta.component.html',
  styleUrls: ['./nueva-venta.component.scss']
})
export class NuevaVentaComponent implements OnInit {
  selectedId = "";
  displayedColumns: string[] = [
    "codigo",
    "descripcion",
    "marca",
    "color",
    "punitario",
    "cantidad",
    "total",
  ];
  dataSource = ELEMENT_DATA;
  constructor(private location: Location) { }

  ngOnInit(): void {
  }
  cancel(event: MouseEvent) {
    this.location.back();
  }
}

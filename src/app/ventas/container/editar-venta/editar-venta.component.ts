import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

export interface EditarVenta {
  codigo: string;
  descripcion: string;
  marca: string;
  color: string;
  punitario: string;
  cantidad: string;
  total: string;
}

const ELEMENT_DATA: EditarVenta[] = [
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
  selector: 'app-editar-venta',
  templateUrl: './editar-venta.component.html',
  styleUrls: ['./editar-venta.component.scss']
})
export class EditarVentaComponent implements OnInit {
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

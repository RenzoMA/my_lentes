import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { MatDialog } from "@angular/material/dialog";
import { AgregarProductoComponent } from "../../agregar-producto/agregar-producto.component";

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
    punitario: "250",
    cantidad: "1",
    total: "250",
  },
  {
    codigo: "2",
    descripcion: "lentes",
    marca: "Ray-Ban",
    color: "azul",
    punitario: "250",
    cantidad: "1",
    total: "250",
  },
  {
    codigo: "3",
    descripcion: "lentes",
    marca: "Ray-Ban",
    color: "azul",
    punitario: "250",
    cantidad: "1",
    total: "250",
  },
  {
    codigo: "4",
    descripcion: "lentes",
    marca: "Ray-Ban",
    color: "azul",
    punitario: "250",
    cantidad: "1",
    total: "250",
  },
];

@Component({
  selector: "app-nueva-venta",
  templateUrl: "./nueva-venta.component.html",
  styleUrls: ["./nueva-venta.component.scss"],
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
  constructor(private location: Location, public dialog: MatDialog) {}

  ngOnInit(): void {}
  cancel(event: MouseEvent) {
    this.location.back();
  }

  updateSelected(row: NuevaVenta) {
    console.log(row);
    if (this.selectedId === row.codigo) {
      this.selectedId = "";
    } else {
      this.selectedId = row.codigo;
    }
  }

  removeProduct() {
    this.dataSource = this.dataSource.filter(
      (item) => item.codigo !== this.selectedId
    );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AgregarProductoComponent, {});

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.dataSource = [...this.dataSource, ...[result]];
      }
    });
  }

  getSubTotal() {
    return this.dataSource.reduce((current, next) => {
      return current + +next.total;
    }, 0);
  }

  getIgv() {
    const subtotal = this.getSubTotal();
    const igv = (subtotal * 18) / 100;
    return igv;
  }

  getTotal() {
    return this.getSubTotal() + this.getIgv();
  }
}

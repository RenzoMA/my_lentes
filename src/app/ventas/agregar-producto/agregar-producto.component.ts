import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { Producto } from "../../inventario/container/main/main.component";
import { NuevaVenta } from "../container/nueva-venta/nueva-venta.component";

@Component({
  selector: "app-agregar-producto",
  templateUrl: "./agregar-producto.component.html",
  styleUrls: ["./agregar-producto.component.scss"],
})
export class AgregarProductoComponent implements OnInit {
  producto: NuevaVenta = {
    codigo: "x",
    descripcion: "xxx",
    marca: "xxxx",
    cantidad: "1",
    color: "rojo",
    punitario: "2",
    total: "10",
  };
  constructor(public dialogRef: MatDialogRef<AgregarProductoComponent>) {}

  ngOnInit(): void {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  onKeyPress(event: KeyboardEvent) {
    return event.charCode == 8 || event.charCode == 0 || event.charCode == 13
      ? null
      : event.charCode >= 48 && event.charCode <= 57;
  }
}

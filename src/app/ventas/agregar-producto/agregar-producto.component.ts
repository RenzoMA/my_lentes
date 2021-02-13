import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { Producto } from "../../inventario/container/main/main.component";
import { NuevaVenta } from "../container/nueva-venta/nueva-venta.component";
import { ProductoService } from "../../services/producto.service";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-agregar-producto",
  templateUrl: "./agregar-producto.component.html",
  styleUrls: ["./agregar-producto.component.scss"],
})
export class AgregarProductoComponent implements OnInit {
  producto: NuevaVenta;

  codigoControl = new FormControl("");
  descripcionControl = new FormControl({ value: "", disabled: true });
  cantidadControl = new FormControl(1);
  productControl = new FormControl();
  constructor(
    public dialogRef: MatDialogRef<AgregarProductoComponent>,
    private productoService: ProductoService
  ) {}

  ngOnInit(): void {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  onKeyPress(event: KeyboardEvent) {
    return event.charCode == 8 || event.charCode == 0 || event.charCode == 13
      ? null
      : event.charCode >= 48 && event.charCode <= 57;
  }
  save() {
    this.producto = {
      cantidad: this.cantidadControl.value,
      codigo: +this.codigoControl.value,
      descripcion: this.productControl.value.descripcion,
      marca: this.productControl.value.marca,
      punitario: 10,
      total: this.cantidadControl.value * 10,
    };
    this.dialogRef.close(this.producto);
  }
  onKeyPressCode(event: KeyboardEvent) {
    if (event.charCode === 13) {
      this.productoService
        .getProductos(this.codigoControl.value)
        .subscribe((products) => {
          if (products.length > 0) {
            this.productControl.setValue(products[0]);
            this.descripcionControl.setValue(products[0].descripcion);
          }
        });
    }
  }
}

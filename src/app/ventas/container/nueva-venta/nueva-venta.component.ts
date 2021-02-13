import { Component, OnInit, Input } from "@angular/core";
import { Location } from "@angular/common";
import { MatDialog } from "@angular/material/dialog";
import { AgregarProductoComponent } from "../../agregar-producto/agregar-producto.component";
import { Canal } from "../../../models/canal.model";
import { Observable } from "rxjs";
import { CanalService } from "../../../services/canal.service";
import { User } from "../../../models/user.model";
import { UserService } from "../../../services/user.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ClienteService } from "../../../services/cliente.service";
import {
  VentaService,
  VentaParam,
  EntityVentaDetalle,
} from "../../../services/venta.service";

export interface NuevaVenta {
  codigo: number;
  descripcion: string;
  marca: string;
  punitario: number;
  cantidad: number;
  total: number;
}

@Component({
  selector: "app-nueva-venta",
  templateUrl: "./nueva-venta.component.html",
  styleUrls: ["./nueva-venta.component.scss"],
})
export class NuevaVentaComponent implements OnInit {
  selectedId = 0;
  displayedColumns: string[] = [
    "codigo",
    "descripcion",
    "marca",
    "punitario",
    "cantidad",
    "total",
  ];
  dataSource: NuevaVenta[] = [];
  canales$: Observable<Canal[]>;
  users$: Observable<User[]>;

  formGroup = new FormGroup({
    dniControl: new FormControl("", [Validators.required]),
    idCliente: new FormControl("", [Validators.required]),
    canalComentario: new FormControl(""),
    vendedorControl: new FormControl("", [Validators.required]),
    canalControl: new FormControl("", [Validators.required]),
    direccionControl: new FormControl("", [Validators.required]),
    fechaVentaControl: new FormControl("", [Validators.required]),
    fechaDespachoControl: new FormControl("", [Validators.required]),
    nombreControl: new FormControl({ value: "", disabled: true }, [
      Validators.required,
    ]),
  });
  constructor(
    private location: Location,
    public dialog: MatDialog,
    private canalService: CanalService,
    private userService: UserService,
    private clientService: ClienteService,
    private ventaService: VentaService
  ) {}

  ngOnInit(): void {
    this.canales$ = this.canalService.getCanales();
    this.users$ = this.userService.getUsers();
  }
  cancel(event: MouseEvent) {
    this.location.back();
  }
  onKeyPress(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      this.clientService
        .getCliente(this.formGroup.get("dniControl").value)
        .subscribe((cliente) => {
          if (cliente) {
            this.formGroup.get("nombreControl").setValue(cliente.nombre);
            this.formGroup.get("idCliente").setValue(cliente.codigo);
          }
        });
    }
  }
  updateSelected(row: NuevaVenta) {
    if (this.selectedId === row.codigo) {
      this.selectedId = 0;
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
    const dialogRef = this.dialog.open(AgregarProductoComponent, {width: '500px'});

    dialogRef.afterClosed().subscribe((result: NuevaVenta) => {
      if (result) {
        this.dataSource = [...this.dataSource, ...[result]];
      }
    });
  }

  getSubTotal() {
    return this.dataSource.reduce((current, next) => {
      return current + next.total;
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

  save() {
    const params: VentaParam = {
      entityVentaDetalle: this.dataSource.map((item) => {
        const res: EntityVentaDetalle = {
          iD_PRODUCTO: item.codigo,
          vdE_NU_CANTIDAD_PEDIDO: item.cantidad,
          vdE_COSTO_SUBTOTAL: item.punitario,
          vdE_COSTO_TOTAL: item.punitario * 1.18,
          vdE_IMPUESTOS: (item.punitario * 18) / 100,
        };
        return res;
      }),
      entityVentaInsertUpdate: {
        iD_CANAL_PRINCIPAL: this.formGroup.get("canalControl").value,
        iD_CLIENTE: this.formGroup.get("idCliente").value,
        iD_USUARIO: this.formGroup.get("vendedorControl").value,
        veN_COMENTARIO: this.formGroup.get("canalComentario").value,
        veN_DIRECCION_ENTREGA: this.formGroup.get("canalComentario").value,
        veN_FECHA_VENTA: this.formGroup.get("fechaVentaControl").value,
        veN_FECHA_DESPACHO: this.formGroup.get("fechaDespachoControl").value,
        veN_COSTO_TOTAL_VENTA: this.getTotal(),
      },
    };
    this.ventaService.save(params).subscribe(
      () => {
        this.location.back();
      },
      (err) => {}
    );
  }

  isDisabled() {
    return this.formGroup.invalid || this.dataSource.length === 0;
  }
}

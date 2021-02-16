import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { ClienteService } from "../../../services/cliente.service";
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { TipoDocumento } from "../../../models/tipo-doc.model";
import { Canal } from "../../../models/canal.model";
import { Categoria } from "../../../models/categoria.model";
import { TipoCliente } from "../../../models/tipo-cliente.model";
import { TipoDocService } from "../../../services/tipo-doc.service";
import { CanalService } from "../../../services/canal.service";
import { CategoriaService } from "../../../services/categoria.service";

@Component({
  selector: "app-editar-cliente",
  templateUrl: "./editar-cliente.component.html",
  styleUrls: ["./editar-cliente.component.scss"],
})
export class EditarClienteComponent implements OnInit {
  tipoDocs: TipoDocumento[] = [];
  canales: Canal[] = [];
  categorias: Categoria[] = [];
  tipoClientes: TipoCliente[] = [];
  editGroup = new FormGroup({
    codigo: new FormControl(""),
    tipoDoc: new FormControl(""),
    telefono: new FormControl(""),
    nombre: new FormControl(""),
    apellido: new FormControl(""),
    documento: new FormControl(""),
    correo: new FormControl(""),
    direccion: new FormControl(""),
    canal: new FormControl(""),
    cumpleaños: new FormControl(""),
    enlaceRRSS2: new FormControl(""),
    enlaceRRSS1: new FormControl(""),
    categoria: new FormControl(""),
    tipoCliente: new FormControl(""),
  });
  constructor(
    private location: Location,
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private tipoDocService: TipoDocService,
    private canalService: CanalService,
    private categoriaService: CategoriaService
  ) {}

  ngOnInit(): void {
    this.tipoDocService.getTipoDoc().subscribe((items) => {
      this.tipoDocs = items;
    });
    this.canalService.getCanales().subscribe((item) => {
      this.canales = item;
    });
    this.categoriaService.getCategorias().subscribe((items) => {
      this.categorias = items;
    });
    this.clienteService.getTipoCliente().subscribe((items) => {
      this.tipoClientes = items;
    });
    const id = this.route.snapshot.paramMap.get("id");
    this.clienteService.getClienteById(+id).subscribe((item) => {
      this.editGroup = new FormGroup({
        codigo: new FormControl({ value: item.iD_CLIENTE, disabled: true }, [
          Validators.required,
        ]),
        tipoDoc: new FormControl(item.iD_TIPO_DOCUMENTO, [Validators.required]),
        telefono: new FormControl(item.clI_NU_TELEFONO, [Validators.required]),
        nombre: new FormControl(item.clI_NOMBRE, [Validators.required]),
        apellido: new FormControl(item.clI_APELLIDO, [Validators.required]),
        documento: new FormControl(item.clI_NU_DOCUMENTO, [
          Validators.required,
        ]),
        correo: new FormControl(item.clI_CORREO, [Validators.required]),
        direccion: new FormControl(item.clI_DIRECCION, [Validators.required]),
        canal: new FormControl(item.iD_CANAL_PRINCIPAL, [Validators.required]),
        cumpleaños: new FormControl(new Date(item.clI_CUMPLEAÑOS), [
          Validators.required,
        ]),
        enlaceRRSS2: new FormControl(item.clI_ENLACE_RRSS2, [
          Validators.required,
        ]),
        enlaceRRSS1: new FormControl(item.clI_ENLACE_RRSS1, [
          Validators.required,
        ]),
        categoria: new FormControl(item.iD_CATEGORIA, [Validators.required]),
        tipoCliente: new FormControl(item.iD_TIPO_CLIENTE, [
          Validators.required,
        ]),
      });
    });
  }
  cancel(event: MouseEvent) {
    this.location.back();
  }
  isDisabled() {
    return this.editGroup.invalid;
  }
  save() {
    const {
      codigo,
      tipoDoc,
      telefono,
      nombre,
      apellido,
      documento,
      correo,
      direccion,
      canal,
      cumpleaños,
      enlaceRRSS2,
      enlaceRRSS1,
      categoria,
      tipoCliente,
    } = this.editGroup.getRawValue();
    this.clienteService
      .updateCliente(
        codigo,
        tipoDoc,
        canal,
        categoria,
        tipoCliente,
        documento,
        telefono,
        nombre,
        apellido,
        correo,
        cumpleaños.toISOString(),
        direccion,
        enlaceRRSS1,
        enlaceRRSS2
      )
      .subscribe(() => {
        this.location.back();
      });
  }
}

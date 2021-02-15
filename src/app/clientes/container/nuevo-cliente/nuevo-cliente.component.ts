import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { TipoDocService } from "../../../services/tipo-doc.service";
import { TipoDocumento } from "../../../models/tipo-doc.model";
import { CanalService } from "../../../services/canal.service";
import { Canal } from "../../../models/canal.model";
import { CategoriaService } from "../../../services/categoria.service";
import { Categoria } from "../../../models/categoria.model";
import { ClienteService } from "../../../services/cliente.service";
import { TipoCliente } from "../../../models/tipo-cliente.model";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-nuevo-cliente",
  templateUrl: "./nuevo-cliente.component.html",
  styleUrls: ["./nuevo-cliente.component.scss"],
})
export class NuevoClienteComponent implements OnInit {
  tipoDocs: TipoDocumento[] = [];
  canales: Canal[] = [];
  categorias: Categoria[] = [];
  tipoClientes: TipoCliente[] = [];
  nuevoGroup = new FormGroup({
    tipoDoc: new FormControl("", [Validators.required]),
    telefono: new FormControl("", [Validators.required]),
    nombre: new FormControl("", [Validators.required]),
    apellido: new FormControl("", [Validators.required]),
    documento: new FormControl("", [Validators.required]),
    correo: new FormControl("", [Validators.required]),
    direccion: new FormControl("", [Validators.required]),
    canal: new FormControl("", [Validators.required]),
    cumpleaños: new FormControl("", [Validators.required]),
    enlaceRRSS2: new FormControl("", [Validators.required]),
    enlaceRRSS1: new FormControl("", [Validators.required]),
    categoria: new FormControl("", [Validators.required]),
    tipoCliente: new FormControl("", [Validators.required]),
  });
  constructor(
    private location: Location,
    private tipoDocService: TipoDocService,
    private canalService: CanalService,
    private categoriaService: CategoriaService,
    private clienteService: ClienteService
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
  }
  cancel(event: MouseEvent) {
    this.location.back();
  }
  isInvalid() {
    return this.nuevoGroup.invalid;
  }
  borrar() {
    this.nuevoGroup.reset();
  }
  save() {
    const {
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
    } = this.nuevoGroup.value;
    this.clienteService
      .crear(
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

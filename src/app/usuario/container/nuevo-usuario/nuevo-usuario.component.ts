import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { TipoDocService } from "../../../services/tipo-doc.service";
import { TipoDocumento } from "../../../models/tipo-doc.model";
import { Cargo } from "../../../models/cargo.model";
import { Perfil } from "../../../models/perfil.model";
import { CargoService } from "../../../services/cargo.service";
import { PerfilService } from "../../../services/perfil.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UserService } from "../../../services/user.service";

@Component({
  selector: "app-nuevo-usuario",
  templateUrl: "./nuevo-usuario.component.html",
  styleUrls: ["./nuevo-usuario.component.scss"],
})
export class NuevoUsuarioComponent implements OnInit {
  tipoDocs: TipoDocumento[] = [];
  cargos: Cargo[] = [];
  perfil: Perfil[] = [];
  registro = new FormGroup({
    tipoDoc: new FormControl(""),
    telefono: new FormControl("", [Validators.required]),
    nombre: new FormControl("", [Validators.required]),
    apellido: new FormControl("", [Validators.required]),
    docIdentidad: new FormControl("", [Validators.required]),
    correo: new FormControl("", [Validators.required]),
    fechaCumpleaños: new FormControl("", [Validators.required]),
    cargo: new FormControl("", [Validators.required]),
    perfil: new FormControl("", [Validators.required]),
    usuario: new FormControl("", [Validators.required]),
    contraseña: new FormControl("", [Validators.required]),
  });

  constructor(
    private location: Location,
    private tipoDocService: TipoDocService,
    private cargoService: CargoService,
    private perfilService: PerfilService,
    private usuarioService: UserService
  ) {}

  ngOnInit(): void {
    this.tipoDocService.getTipoDoc().subscribe((items) => {
      this.tipoDocs = items;
    });
    this.cargoService.getCargos().subscribe((item) => {
      this.cargos = item;
    });
    this.perfilService.getPerfiles().subscribe((item) => {
      this.perfil = item;
    });
  }

  cancel(event: MouseEvent) {
    this.location.back();
  }
  borrar() {
    this.registro.reset();
  }

  save() {

    const {
      tipoDoc,
      telefono,
      nombre,
      apellido,
      docIdentidad,
      correo,
      fechaCumpleaños,
      cargo,
      perfil,
      usuario,
      contraseña,
    } = this.registro.value;
    this.usuarioService
      .registrar(
        cargo,
        perfil,
        1,
        docIdentidad,
        telefono,
        nombre,
        apellido,
        correo,
        fechaCumpleaños.toISOString(),
        usuario,
        contraseña
      )
      .subscribe(() => {
        this.location.back();
      });
  }
  isDisabled() {
    return this.registro.invalid;
  }
}

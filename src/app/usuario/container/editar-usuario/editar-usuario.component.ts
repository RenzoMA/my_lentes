import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "../../../services/user.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { TipoDocumento } from "../../../models/tipo-doc.model";
import { Cargo } from "../../../models/cargo.model";
import { Perfil } from "../../../models/perfil.model";
import { TipoDocService } from "../../../services/tipo-doc.service";
import { CargoService } from "../../../services/cargo.service";
import { PerfilService } from "../../../services/perfil.service";

@Component({
  selector: "app-editar-usuario",
  templateUrl: "./editar-usuario.component.html",
  styleUrls: ["./editar-usuario.component.scss"],
})
export class EditarUsuarioComponent implements OnInit {
  tipoDocs: TipoDocumento[] = [];
  cargos: Cargo[] = [];
  perfiles: Perfil[] = [];
  editFormGroup: FormGroup = new FormGroup({
    codigo: new FormControl(""),
    tipoDoc: new FormControl(""),
    telefono: new FormControl(""),
    nombre: new FormControl(""),
    apellido: new FormControl(""),
    documento: new FormControl(""),
    correo: new FormControl(""),
    fechaCumpleaños: new FormControl(""),
    cargo: new FormControl(""),
    perfil: new FormControl(""),
    usuario: new FormControl(""),
    contraseña: new FormControl(""),
  });

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private userService: UserService,
    private tipoDocService: TipoDocService,
    private cargoService: CargoService,
    private perfilService: PerfilService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.userService.getUser(+id).subscribe((user) => {
      this.editFormGroup = new FormGroup({
        codigo: new FormControl({ value: user.iD_USUARIO, disabled: true }, [
          Validators.required,
        ]),
        tipoDoc: new FormControl(user.iD_TIPO_DOCUMENTO, [
          Validators.required,
          Validators.min(1),
        ]),
        telefono: new FormControl(user.usU_NU_TELEFONO, [Validators.required]),
        nombre: new FormControl(user.usU_NOMBRE, [Validators.required]),
        apellido: new FormControl(user.usU_APELLIDO, [Validators.required]),
        documento: new FormControl(user.usU_NU_DOCUMENTO, [
          Validators.required,
        ]),
        correo: new FormControl(user.usU_CORREO, [Validators.required]),
        fechaCumpleaños: new FormControl(new Date(user.usU_CUMPLEAÑOS), [
          Validators.required,
        ]),
        cargo: new FormControl(user.iD_CARGO, [Validators.required]),
        perfil: new FormControl(user.iD_PERFIL, [Validators.required]),
        usuario: new FormControl(user.usU_USUARIO, [Validators.required]),
        contraseña: new FormControl(user.usU_CONTRASEÑA, [Validators.required]),
      });
    });
    this.tipoDocService.getTipoDoc().subscribe((items) => {
      this.tipoDocs = items;
    });
    this.cargoService.getCargos().subscribe((items) => {
      this.cargos = items;
    });
    this.perfilService.getPerfiles().subscribe((items) => {
      this.perfiles = items;
    });
  }
  cancel(event: MouseEvent) {
    this.location.back();
  }
  isDisabled() {
    return this.editFormGroup.invalid;
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
      fechaCumpleaños,
      cargo,
      perfil,
      usuario,
      contraseña,
    } = this.editFormGroup.getRawValue();
    this.userService
      .update(
        codigo,
        cargo,
        perfil,
        tipoDoc,
        documento,
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
}

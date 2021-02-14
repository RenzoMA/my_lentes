import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { APP_CONFIG } from "../app.config";
import { User } from "../models/user.model";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(
    private httpClient: HttpClient,
    @Inject(APP_CONFIG) private config: any
  ) {}

  getUsers() {
    const url = `${this.config.api}/User/GetListUser`;
    return this.httpClient.get<User[]>(url);
  }

  getUsuarioParams(nombre: string, documento: string) {
    const url = `${this.config.api}/User/GetUsuarioByParams?nombre=${nombre}&nuDocumento=${documento}`;
    return this.httpClient.get<User[]>(url);
  }

  delete(userId: number) {
    const url = `${this.config.api}/User/Deleteusuario?ID_USUARIO=${userId}`;
    return this.httpClient.delete(url);
  }

  registrar(
    idCargo: number,
    idPerfil: number,
    tipoDoc: number,
    numDoc: string,
    numTelf: string,
    nombre: string,
    apellido: string,
    correo: string,
    cumpleaños: Date,
    usuario: string,
    password: string
  ) {
    const url = `${this.config.api}/User/Postusuario?ID_CARGO=${idCargo}&ID_PERFIL=${idPerfil}&ID_TIPO_DOCUMENTO=${tipoDoc}&USU_NU_DOCUMENTO=${numDoc}&USU_NU_TELEFONO=${numTelf}&USU_NOMBRE=${nombre}&USU_APELLIDO=${apellido}&USU_CORREO=${correo}&USU_CUMPLEAÑOS=${cumpleaños}&USU_USUARIO=${usuario}&USU_CONTRASEÑA=${password}`;
    return this.httpClient.post(url, {});
  }
}

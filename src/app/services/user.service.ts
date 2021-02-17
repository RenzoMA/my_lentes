import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { APP_CONFIG } from "../app.config";
import { User } from "../models/user.model";
import { UserEdit } from "../models/user-edit.model";
import { pluck } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente.model';

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

  getUser(userId: number) {
    const url = `${this.config.api}/User/GetUsuarioByid?ID_USUARIO=${userId}`;
    return this.httpClient.get<UserEdit>(url);
  }

  getUsuarioParams(
    nombre: string,
    documento: string,
    pageNumber: number,
    pageSize: number
  ) {
    const url = `${this.config.api}/User/GetUsuarioByParams?nombre=${nombre}&nuDocumento=${documento}&PageNumber=${pageNumber}&PageSize=${pageSize}`;
    return this.httpClient.get(url).pipe(pluck("data")) as Observable<User[]>;
  }

  delete(userId: number) {
    const url = `${this.config.api}/User/Deleteusuario?ID_USUARIO=${userId}`;
    return this.httpClient.delete(url);
  }
  update(
    idUsuario: number,
    idCargo: number,
    idPerfil: number,
    idTipoDoc: number,
    documento: string,
    telefono: string,
    nombre: string,
    apellido: string,
    correo: string,
    cumpleaños: string,
    usuario: string,
    contraseña: string
  ) {
    const url = `${this.config.api}/User/Putusuario?ID_USUARIO=${idUsuario}&ID_CARGO=${idCargo}&ID_PERFIL=${idPerfil}&ID_TIPO_DOCUMENTO=${idTipoDoc}&USU_NU_DOCUMENTO=${documento}&USU_NU_TELEFONO=${telefono}&USU_NOMBRE=${nombre}&USU_APELLIDO=${apellido}&USU_CORREO=${correo}&USU_CUMPLEAÑOS=${cumpleaños}&USU_USUARIO=${usuario}&USU_CONTRASEÑA=${contraseña}`;
    return this.httpClient.put(url, {});
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

import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Canal } from "../models/canal.model";
import { APP_CONFIG } from "../app.config";
import { Cliente } from "../models/cliente.model";
import { TipoCliente } from "../models/tipo-cliente.model";

@Injectable({
  providedIn: "root",
})
export class ClienteService {
  constructor(
    private httpClient: HttpClient,
    @Inject(APP_CONFIG) private config: any
  ) {}

  getCliente(dni: string) {
    const url = `${this.config.api}/Cliente/GetClienteByDNI?dniCliente=${dni}`;
    return this.httpClient.get<Cliente>(url);
  }

  getClienteByParams(nombre: string, documento: string, estado: number) {
    const url = `${this.config.api}/Cliente/GetClienteByParams?nombre=${nombre}&documento=${documento}&estado=${estado}`;
    return this.httpClient.get<Cliente[]>(url);
  }

  delete(clienteId: number) {
    const url = `${this.config.api}/Cliente/DeleteCliente?ID_CLIENTE=${clienteId}`;
    return this.httpClient.delete(url);
  }
  getTipoCliente() {
    const url = `${this.config.api}/TipoCliente/GetTipocliente`;
    return this.httpClient.get<TipoCliente[]>(url);
  }

  crear(
    tipoDoc: number,
    idCanal: number,
    idCategoria: number,
    tipoCliente: number,
    numDoc: string,
    telefono: string,
    nombre: string,
    apellido: string,
    correo: string,
    cumpleaños: string,
    direccion: string,
    enlace1: string,
    enlace2: string
  ) {
    const url = `${this.config.api}/Cliente/PostCliente?ID_TIPO_DOCUMENTO=${tipoDoc}&ID_CANAL_PRINCIPAL=${idCanal}&ID_CATEGORIA=${idCategoria}&ID_TIPO_CLIENTE=${tipoCliente}&CLI_NU_DOCUMENTO=${numDoc}&CLI_NU_TELEFONO=${telefono}&CLI_NOMBRE=${nombre}&CLI_APELLIDO=${apellido}&CLI_CORREO=${correo}&CLI_CUMPLEAÑOS=${cumpleaños}&CLI_DIRECCION=${direccion}&CLI_ENLACE_RRSS1=${enlace1}&CLI_ENLACE_RRSS2=${enlace2}`;
    return this.httpClient.post(url, {});
  }

  contacto(
    nombre: string,
    apellido: string,
    correo: string,
    comentario: string
  ) {
    const url = `${this.config.api}/Cliente/PostContacto?CONTAC_NOMBRE=${nombre}&CONTAC_APELLIDO=${apellido}&CONTAC_CORREO=${correo}&CONTAC_COMENTARIO=${comentario}`;
    return this.httpClient.post(url, {});
  }
}

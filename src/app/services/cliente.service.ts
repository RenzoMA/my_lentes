import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Canal } from "../models/canal.model";
import { APP_CONFIG } from "../app.config";
import { Cliente } from '../models/cliente.model';

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
}

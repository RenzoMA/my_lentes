import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Canal } from "../models/canal.model";
import { APP_CONFIG } from "../app.config";
import { Cliente } from '../models/cliente.model';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: "root",
})
export class ProductoService {
  constructor(
    private httpClient: HttpClient,
    @Inject(APP_CONFIG) private config: any
  ) {}

  getProductos(code: string) {
    const url = `${this.config.api}/Producto/GetProductoByParams?parametros=${code}`;
    return this.httpClient.get<Producto[]>(url);
  }
}

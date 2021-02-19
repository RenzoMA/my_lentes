import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Canal } from "../models/canal.model";
import { APP_CONFIG } from "../app.config";
import { Cliente } from "../models/cliente.model";
import { Producto, ProductoDetalle } from "../models/producto.model";
import { TipoProducto } from "../models/tipo-producto.model";
import { pluck } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class ProductoService {
  constructor(
    private httpClient: HttpClient,
    @Inject(APP_CONFIG) private config: any
  ) {}
  getCatalog() {
    const url = `${this.config.api}/Producto/GetProducto`;
    return this.httpClient.get<Producto[]>(url);
  }
  getProductos(
    code: string,
    descripcion: string,
    PageNumber: number,
    pageSize: number,
    tipo: number
  ) {
    const url = `${this.config.api}/Producto/GetProductoByParams?PageNumber=${PageNumber}&PageSize=${pageSize}&codigo=${code}&descripcion=${descripcion}&tipo=${tipo}`;
    return this.httpClient.get(url).pipe(pluck("data")) as Observable<Producto[]>;
  }

  getProductoDetalle(code: number) {
    const url = `${this.config.api}/Producto/GetProductoByid?ID_PRODUCTO=${code}`;
    return this.httpClient.get<ProductoDetalle>(url);
  }

  getTipoProducto() {
    const url = `${this.config.api}/Tipoproducto/GetTipoproducto`;
    return this.httpClient.get<TipoProducto[]>(url);
  }
  delete(id: number) {
    const url = `${this.config.api}/Producto/DeleteProducto?ID_PRODUCTO=${id}`;
    return this.httpClient.delete(url);
  }
  crearProducto(
    tipoProducto: number,
    idMarca: number,
    codigoFabrica: string,
    codigoSunat: string,
    descripcion: string,
    enlaceRRSS1: string,
    enlaceRRSS2: string,
    precio: number,
    stock: number,
    imagen: string
  ) {
    const url = `${this.config.api}/Producto/PostProducto?ID_TIPO_PRODUCTO=${tipoProducto}&ID_MARCA=${idMarca}&ID_UNIDAD_VENTA=1&PRO_CODIGO_FABRICA=${codigoFabrica}&PRO_CODIGO_SUNAT=${codigoSunat}&PRO_DESCRIPCION=${descripcion}&PRO_ENLACE_RRSS1=${enlaceRRSS1}&PRO_ENLACE_RRSS2=${enlaceRRSS2}&PRO_PRECIO=${precio}&PRO_STOCK=${stock}&PRO_IMAGEN=${imagen}`;
    return this.httpClient.post(url, {});
  }

  updateProducto(
    codigoProducto: number,
    tipoProducto: number,
    idMarca: number,
    codigoFabrica: string,
    codigoSunat: string,
    descripcion: string,
    enlaceRRSS1: string,
    enlaceRRSS2: string,
    precio: number,
    stock: number,
    imagen: string
  ) {
    const url = `${this.config.api}/Producto/PutProducto?ID_PRODUCTO=${codigoProducto}&ID_TIPO_PRODUCTO=${tipoProducto}&ID_MARCA=${idMarca}&PRO_CODIGO_FABRICA=${codigoFabrica}&PRO_CODIGO_SUNAT=${codigoSunat}&PRO_DESCRIPCION=${descripcion}&PRO_ENLACE_RRSS1=${enlaceRRSS1}&PRO_ENLACE_RRSS2=${enlaceRRSS2}&PRO_PRECIO=${precio}&PRO_STOCK=${stock}&PRO_IMAGEN=${imagen}&ID_UNIDAD_VENTA=1`;
    return this.httpClient.put(url, {});
  }
}

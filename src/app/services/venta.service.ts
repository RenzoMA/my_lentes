import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { APP_CONFIG } from "../app.config";
import { Venta } from "../models/venta.model";
import { pluck } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface EntityVentaInsertUpdate {
  iD_CLIENTE: number;
  iD_CANAL_PRINCIPAL: number;
  iD_USUARIO: number;
  veN_FECHA_VENTA: Date;
  veN_COSTO_TOTAL_VENTA: number;
  veN_DIRECCION_ENTREGA: string;
  veN_FECHA_DESPACHO: Date;
  veN_COMENTARIO: string;
}

export interface EntityVentaDetalle {
  iD_PRODUCTO: number;
  vdE_NU_CANTIDAD_PEDIDO: number;
  vdE_COSTO_SUBTOTAL: number;
  vdE_IMPUESTOS: number;
  vdE_COSTO_TOTAL: number;
}

export interface VentaParam {
  entityVentaInsertUpdate: EntityVentaInsertUpdate;
  entityVentaDetalle: EntityVentaDetalle[];
}

@Injectable({
  providedIn: "root",
})
export class VentaService {
  constructor(
    private httpClient: HttpClient,
    @Inject(APP_CONFIG) private config: any
  ) {}
  getVentaParams(
    estado: number,
    nombre: string,
    documento: string,
    canal: string,
    inicio: Date,
    fin: Date,
    pageSize: number,
    pageNumber: number
  ) {
    const url = `${this.config.api}/Venta/GetVentaByParams?estado=${estado}&nombre=${nombre}&nuDocumento=${documento}&idCanal=${canal}&fechaDesdeVenta=${inicio}&fechaHastaVenta=${fin}&PageNumber=${pageNumber}&PageSize=${pageSize}`;
    return this.httpClient.get(url).pipe(pluck("data")) as Observable<Venta[]>;;
  }
  getVentas() {
    const url = `${this.config.api}/Venta/GetVenta`;
    return this.httpClient.get<Venta[]>(url);
  }

  save(params: VentaParam) {
    const url = `${this.config.api}/Venta/PostVenta`;
    return this.httpClient.post<Venta[]>(url, params);
  }

  delete(id: number) {
    const url = `${this.config.api}/Venta/DeleteVenta?ID_VENTA=${id}`;
    return this.httpClient.delete(url);
  }
  getVentaMarcaCanal(marca: number, canal: number) {
    const url = `${this.config.api}/Venta/GetVentaByVentaxMarcaxCanal?marca=${marca}&canal=${canal}`;
    return this.httpClient.get<Venta[]>(url);
  }
}

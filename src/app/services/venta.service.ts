import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { APP_CONFIG } from "../app.config";
import { Venta } from "../models/venta.model";

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
  getVentaParams(params: string, inicio: Date, fin: Date) {
    const url = `${this.config.api}/Venta/GetVentaByParams?parametros=${params}&fechaDesdeVenta=${inicio}&fechaHastaVenta=${fin}`;
    return this.httpClient.get<Venta[]>(url);
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
}

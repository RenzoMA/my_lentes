import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { APP_CONFIG } from "../app.config";
import { Inicio } from "../models/inicio.model";
import { map } from "rxjs/operators";
import { TipoDocumento } from '../models/tipo-doc.model';

@Injectable({
  providedIn: "root",
})
export class TipoDocService {
  constructor(
    private httpClient: HttpClient,
    @Inject(APP_CONFIG) private config: any
  ) {}

  getTipoDoc() {
    const url = `${this.config.api}/Tipodoc/GetTipoDocumento`;
    return this.httpClient.get<TipoDocumento[]>(url);
  }
}

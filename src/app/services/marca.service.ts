import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { APP_CONFIG } from "../app.config";
import { Inicio } from "../models/inicio.model";
import { map } from "rxjs/operators";
import { TipoDocumento } from "../models/tipo-doc.model";
import { Cargo } from "../models/cargo.model";
import { Perfil } from "../models/perfil.model";
import { Marca } from '../models/marca.model';

@Injectable({
  providedIn: "root",
})
export class MarcaService {
  constructor(
    private httpClient: HttpClient,
    @Inject(APP_CONFIG) private config: any
  ) {}

  getMarcas() {
    const url = `${this.config.api}/Canal/GetMarca`;
    return this.httpClient.get<Marca[]>(url);
  }
}

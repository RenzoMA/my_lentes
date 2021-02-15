import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { APP_CONFIG } from "../app.config";
import { Inicio } from "../models/inicio.model";
import { map } from "rxjs/operators";
import { TipoDocumento } from "../models/tipo-doc.model";
import { Cargo } from "../models/cargo.model";
import { Categoria } from "../models/categoria.model";

@Injectable({
  providedIn: "root",
})
export class CategoriaService {
  constructor(
    private httpClient: HttpClient,
    @Inject(APP_CONFIG) private config: any
  ) {}

  getCategorias() {
    const url = `${this.config.api}/Categoria/GetCategoria`;
    return this.httpClient.get<Categoria[]>(url);
  }
}

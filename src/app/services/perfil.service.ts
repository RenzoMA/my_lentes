import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { APP_CONFIG } from "../app.config";
import { Inicio } from "../models/inicio.model";
import { map } from "rxjs/operators";
import { TipoDocumento } from "../models/tipo-doc.model";
import { Cargo } from "../models/cargo.model";
import { Perfil } from "../models/perfil.model";

@Injectable({
  providedIn: "root",
})
export class PerfilService {
  constructor(
    private httpClient: HttpClient,
    @Inject(APP_CONFIG) private config: any
  ) {}

  getPerfiles() {
    const url = `${this.config.api}/Perfil/GetPerfil`;
    return this.httpClient.get<Perfil[]>(url);
  }
}

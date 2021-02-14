import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { APP_CONFIG } from "../app.config";
import { Inicio } from "../models/inicio.model";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class InicioService {
  constructor(
    private httpClient: HttpClient,
    @Inject(APP_CONFIG) private config: any
  ) {}

  getInicio() {
    const url = `${this.config.api}/Inicio/GetInicio`;
    return this.httpClient.get<Inicio>(url).pipe(map((item) => item[0]));
  }
}

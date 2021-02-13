import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Canal } from "../models/canal.model";
import { APP_CONFIG } from "../app.config";

@Injectable({
  providedIn: "root",
})
export class CanalService {
  constructor(
    private httpClient: HttpClient,
    @Inject(APP_CONFIG) private config: any
  ) {}

  getCanales() {
    const url = `${this.config.api}/Canal/GetCanal`;
    return this.httpClient.get<Canal[]>(url);
  }
}

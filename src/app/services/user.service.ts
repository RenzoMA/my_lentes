import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { APP_CONFIG } from "../app.config";
import { User } from '../models/user.model';

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(
    private httpClient: HttpClient,
    @Inject(APP_CONFIG) private config: any
  ) {}

  getUsers() {
    const url = `${this.config.api}/User/GetListUser`;
    return this.httpClient.get<User[]>(url);
  }
}

import { Injectable, Inject } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { APP_CONFIG } from "../app.config";
import { User } from "../models/user.model";
import { tap, map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class SessionService {
  constructor(
    private httpClient: HttpClient,
    @Inject(APP_CONFIG) private config: any
  ) {}

  isLoggedIn() {
    const user = localStorage.getItem("mis_lentes");
    return user ? true : false;
  }

  logIn(user: string, password: string) {
    const url = `${this.config.api}/User/GetLogin?usuario=${user}&contraseña=${password}`;
    return this.httpClient.get<User[]>(url).pipe(
      map((items) => {
        return items.length > 0 ? items[0] : null;
      }),
      tap((item) => {
        if (item) {
          localStorage.setItem("mis_lentes", JSON.stringify(item));
        }
      })
    );
  }

  logOut() {
    localStorage.removeItem("mis_lentes");
  }

  getUser() {
    return JSON.parse(localStorage.getItem("mis_lentes")) as User;
  }
}

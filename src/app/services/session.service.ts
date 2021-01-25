import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class SessionService {
  constructor() {}

  isLoggedIn() {
    const user = localStorage.getItem("mis_lentes");
    return user ? true : false;
  }

  logIn(user: string, password: string) {
    localStorage.setItem("mis_lentes", JSON.stringify({ user }));
  }

  logOut() {
    localStorage.removeItem("mis_lentes");
  }

  getUser() {
    return JSON.parse(localStorage.getItem("mis_lentes"));
  }
}

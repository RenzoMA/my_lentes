import { Component, OnInit } from "@angular/core";
import { SessionService } from "../../services/session.service";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    username: [""],
    password: [""],
  });
  constructor(
    private sessionService: SessionService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {}
  login(event: MouseEvent) {
    event.preventDefault();
    const { username, password } = this.loginForm.value;
    this.sessionService.logIn(username.toUpperCase(), password);
    this.router.navigate([""]);
  }
}

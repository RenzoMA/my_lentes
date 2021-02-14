import { Component, OnInit } from "@angular/core";
import { SessionService } from "../../../services/session.service";
import { InicioService } from "../../../services/inicio.service";
import { Inicio } from "../../../models/inicio.model";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
  username = "";
  inicio: Inicio = { stock: 0, clientes: 0, usuarios: 0, ventas: 0 };
  constructor(
    private sessionService: SessionService,
    private inicioService: InicioService
  ) {}

  ngOnInit(): void {
    const { user } = this.sessionService.getUser();
    this.username = user;
    this.inicioService.getInicio().subscribe((item) => {
      this.inicio = item;
    });
  }
}

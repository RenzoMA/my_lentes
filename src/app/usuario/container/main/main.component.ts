import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { UserService } from "../../../services/user.service";
import { User } from "../../../models/user.model";
import { FormControl } from "@angular/forms";
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
  selectedId = 0;
  displayedColumns: string[] = [
    "codigo",
    "tipoDoc",
    "documento",
    "nombre",
    "telefono",
    "correo",
    "cargo",
  ];
  dataSource: User[] = [];
  nombre = new FormControl("");
  documento = new FormControl("");
  page = 1;
  pageSize = 10;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private usuarioService: UserService
  ) {}

  pageChange(event: PageEvent) {
    this.page = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.loadUsers();
  }

  ngOnInit(): void {
    this.loadUsers();
  }
  loadUsers() {
    this.usuarioService
      .getUsuarioParams(
        this.nombre.value,
        this.documento.value,
        this.page,
        this.pageSize
      )
      .subscribe((items) => {
        this.dataSource = items;
      });
  }
  nuevoUsuario(event: MouseEvent) {
    this.router.navigate(["nuevo"], { relativeTo: this.route });
  }
  updateSelected(row: User) {
    if (this.selectedId === row.codigo) {
      this.selectedId = 0;
    } else {
      this.selectedId = row.codigo;
    }
  }
  delete() {
    this.usuarioService.delete(this.selectedId).subscribe(() => {
      this.loadUsers();
    });
  }
  modificarUsuario(event: MouseEvent) {
    this.router.navigate(["editar", this.selectedId], {
      relativeTo: this.route,
    });
  }

  search() {
    this.loadUsers();
  }
}

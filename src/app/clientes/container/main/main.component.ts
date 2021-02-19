import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Cliente } from "../../../models/cliente.model";
import { ClienteService } from "../../../services/cliente.service";
import { FormControl } from "@angular/forms";
import { PageEvent } from "@angular/material/paginator";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
  selectedId = 0;
  displayedColumns: string[] = [
    "codigo",
    "nombre",
    "numDoc",
    "tipo",
    "categoria",
    "canal",
    "estado",
  ];
  dataSource: Cliente[] = [];
  nombre = new FormControl("");
  documento = new FormControl("");
  estado = new FormControl("");
  page: number = 1;
  pageSize: number = 10;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private clienteService: ClienteService
  ) {}

  ngOnInit(): void {
    this.loadClientes();
  }
  search() {
    this.loadClientes();
  }

  borrar() {
    this.nombre.reset("");
    this.documento.reset("");
    this.estado.reset("");
  }
  pageChange(event: PageEvent) {
    this.page = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.loadClientes();
  }
  loadClientes() {
    this.clienteService
      .getClienteByParams(
        this.nombre.value,
        this.documento.value,
        this.estado.value,
        this.page,
        this.pageSize
      )
      .subscribe((clientes) => {
        this.dataSource = clientes;
      });
  }
  nuevoCliente(event: MouseEvent) {
    this.router.navigate(["nuevo"], { relativeTo: this.route });
  }
  updateSelected(row: Cliente) {
    if (this.selectedId === row.codigo) {
      this.selectedId = 0;
    } else {
      this.selectedId = row.codigo;
    }
  }
  modificarCliente(event: MouseEvent) {
    this.router.navigate(["editar", this.selectedId], {
      relativeTo: this.route,
    });
  }

  delete() {
    this.clienteService.delete(this.selectedId).subscribe(() => {
      this.loadClientes();
    });
  }
}

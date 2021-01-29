import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

export interface Usuario {
  codigo: string;
  tdocumento: string;
  documento: string;
  nombre: string;
  telefono: string;
  correo: string;
  cargo: string
}

const ELEMENT_DATA: Usuario[] = [
  {
    codigo: "1",
    tdocumento: "DNI",
    documento: "12345678",
    nombre: "Carlos Suarez",
    telefono: "963154853",
    correo: "csuarez@gmail.com",
    cargo: "Administrativo",
  },
  {
    codigo: "2",
    tdocumento: "DNI",
    documento: "12345678",
    nombre: "Carlos Suarez",
    telefono: "963154853",
    correo: "csuarez@gmail.com",
    cargo: "Administrativo",
  },
  {
    codigo: "3",
    tdocumento: "DNI",
    documento: "12345678",
    nombre: "Carlos Suarez",
    telefono: "963154853",
    correo: "csuarez@gmail.com",
    cargo: "Administrativo",
  },
  {
    codigo: "4",
    tdocumento: "DNI",
    documento: "12345678",
    nombre: "Carlos Suarez",
    telefono: "963154853",
    correo: "csuarez@gmail.com",
    cargo: "Administrativo",
  },
];

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  selectedId = "";
  displayedColumns: string[] = [
    "codigo",
    "tdocumento",
    "documento",
    "nombre",
    "telefono",
    "correo",
    "cargo",
  ];
  dataSource = ELEMENT_DATA;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  nuevoUsuario(event: MouseEvent) {
    this.router.navigate(["nuevo"], { relativeTo: this.route });
  }
  updateSelected(row: Usuario) {
    if (this.selectedId === row.codigo) {
      this.selectedId = "";
    } else {
      this.selectedId = row.codigo;
    }
  }
  modificarUsuario(event: MouseEvent) {
    this.router.navigate(["editar", this.selectedId], {relativeTo: this.route});
  }
}

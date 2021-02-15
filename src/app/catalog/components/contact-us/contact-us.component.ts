import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ClienteService } from "../../../services/cliente.service";

@Component({
  selector: "app-contact-us",
  templateUrl: "./contact-us.component.html",
  styleUrls: ["./contact-us.component.scss"],
})
export class ContactUsComponent implements OnInit {
  sent: boolean = false;
  contactForm = new FormGroup({
    nombre: new FormControl("", [Validators.required]),
    apellido: new FormControl("", [Validators.required]),
    correo: new FormControl("", [Validators.required]),
    comentario: new FormControl("", [Validators.required]),
  });
  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {}

  send() {
    const { nombre, apellido, correo, comentario } = this.contactForm.value;
    this.clienteService
      .contacto(nombre, apellido, correo, comentario)
      .subscribe(() => {
        this.sent = true;
      });
  }

  isDisabled() {
    return this.contactForm.invalid;
  }
}

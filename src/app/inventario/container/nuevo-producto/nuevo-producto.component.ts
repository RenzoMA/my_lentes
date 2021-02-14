import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { ProductoService } from "../../../services/producto.service";
import { TipoProducto } from "../../../models/tipo-producto.model";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UploadImageService } from "../../../services/uploadImage.service";

@Component({
  selector: "app-nuevo-producto",
  templateUrl: "./nuevo-producto.component.html",
  styleUrls: ["./nuevo-producto.component.scss"],
})
export class NuevoProductoComponent implements OnInit {
  tipoProducto: TipoProducto[] = [];

  registrarGroup = new FormGroup({
    codigoFabrica: new FormControl("", [Validators.required]),
    codigoSunat: new FormControl("", [Validators.required]),
    descripcion: new FormControl("", [Validators.required]),
    tipo: new FormControl("", [Validators.required]),
    marca: new FormControl("", [Validators.required]),
    enlaceRRSS2: new FormControl("", [Validators.required]),
    enlaceRRSS1: new FormControl("", [Validators.required]),
    stock: new FormControl("", [Validators.required]),
    precio: new FormControl("", [Validators.required]),
    imageUrl: new FormControl("", [Validators.required]),
  });

  constructor(
    private location: Location,
    private productoService: ProductoService,
    private imageService: UploadImageService
  ) {}

  ngOnInit(): void {
    this.productoService.getTipoProducto().subscribe((items) => {
      this.tipoProducto = items;
    });
  }
  cancel(event: MouseEvent) {
    this.location.back();
  }

  getImage() {
    return this.registrarGroup.get("imageUrl").value;
  }
  borrar() {
    this.registrarGroup.reset();
  }
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      this.imageService.upload(event.target.files[0]).subscribe((res: any) => {
        this.registrarGroup.get("imageUrl").setValue(res.data.display_url);
      });
    }
  }

  save() {
    const {
      codigoFabrica,
      codigoSunat,
      descripcion,
      tipo,
      marca,
      enlaceRRSS2,
      enlaceRRSS1,
      unidadVenta,
      stock,
      precio,
      imageUrl,
    } = this.registrarGroup.value;
    this.productoService
      .crearProducto(
        tipo,
        marca,
        codigoFabrica,
        codigoSunat,
        descripcion,
        enlaceRRSS1,
        enlaceRRSS2,
        precio,
        stock,
        imageUrl
      )
      .subscribe(() => {
        this.location.back();
      });
  }

  isDisabled() {
    return this.registrarGroup.invalid;
  }
}

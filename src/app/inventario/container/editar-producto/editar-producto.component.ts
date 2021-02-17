import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { TipoProducto } from "../../../models/tipo-producto.model";
import { Marca } from "../../../models/marca.model";
import { ProductoService } from "../../../services/producto.service";
import { UploadImageService } from "../../../services/uploadImage.service";
import { MarcaService } from "../../../services/marca.service";
import { ActivatedRoute } from "@angular/router";
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: "app-editar-producto",
  templateUrl: "./editar-producto.component.html",
  styleUrls: ["./editar-producto.component.scss"],
})
export class EditarProductoComponent implements OnInit {
  tipoProducto: TipoProducto[] = [];
  marcas: Marca[] = [];

  editarGroup = new FormGroup({
    codigo: new FormControl(""),
    codigoFabrica: new FormControl(""),
    codigoSunat: new FormControl(""),
    descripcion: new FormControl(""),
    tipo: new FormControl(""),
    marca: new FormControl(""),
    enlaceRRSS2: new FormControl(""),
    enlaceRRSS1: new FormControl(""),
    stock: new FormControl(""),
    precio: new FormControl(""),
    imageUrl: new FormControl(""),
  });
  constructor(
    private location: Location,
    private productoService: ProductoService,
    private imageService: UploadImageService,
    private marcaService: MarcaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.productoService.getTipoProducto().subscribe((items) => {
      this.tipoProducto = items;
    });
    this.marcaService.getMarcas().subscribe((items) => {
      this.marcas = items;
    });
    const id = this.route.snapshot.paramMap.get("id");
    this.productoService.getProductoDetalle(+id).subscribe((producto) => {
      this.editarGroup = new FormGroup({
        codigo: new FormControl(
          { value: producto.iD_PRODUCTO, disabled: true },
          [Validators.required]
        ),
        codigoFabrica: new FormControl(producto.prO_CODIGO_FABRICA, [
          Validators.required,
        ]),
        codigoSunat: new FormControl(producto.prO_CODIGO_SUNAT, [
          Validators.required,
        ]),
        descripcion: new FormControl(producto.prO_DESCRIPCION, [
          Validators.required,
        ]),
        tipo: new FormControl(producto.iD_TIPO_PRODUCTO, [Validators.required]),
        marca: new FormControl(producto.iD_MARCA, [Validators.required]),
        enlaceRRSS2: new FormControl(producto.prO_ENLACE_RRSS2, [
          Validators.required,
        ]),
        enlaceRRSS1: new FormControl(producto.prO_ENLACE_RRSS1, [
          Validators.required,
        ]),
        stock: new FormControl(producto.prO_STOCK, [Validators.required]),
        precio: new FormControl(producto.prO_PRECIO, [Validators.required]),
        imageUrl: new FormControl(producto.prO_IMAGEN, [Validators.required]),
      });
    });
  }

  getImage() {
    return this.editarGroup.get("imageUrl").value;
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      this.editarGroup.get("imageUrl").setValue(null);
      this.imageService.upload(event.target.files[0]).subscribe((res: any) => {
        this.editarGroup.get("imageUrl").setValue(res.data.display_url);
      });
    }
  }
  cancel(event: MouseEvent) {
    this.location.back();
  }
  isDisabled() {
    return this.editarGroup.invalid;
  }
  save() {
    const {
      codigo,
      codigoFabrica,
      codigoSunat,
      descripcion,
      tipo,
      marca,
      enlaceRRSS2,
      enlaceRRSS1,
      stock,
      precio,
      imageUrl,
    } = this.editarGroup.getRawValue();
    this.productoService
      .updateProducto(
        codigo,
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
}

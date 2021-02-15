import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainComponent } from "./container/main/main.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductComponent } from "./components/product/product.component";
import { CarousselComponent } from "./components/caroussel/caroussel.component";
import { AboutUsComponent } from "./components/about-us/about-us.component";
import { ContactUsComponent } from "./components/contact-us/contact-us.component";
import { CatalogRoutingModule } from "./catalog-routing.module";
import { CarouselModule } from "ngx-owl-carousel-o";
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainComponent,
    ProductListComponent,
    ProductComponent,
    CarousselComponent,
    AboutUsComponent,
    ContactUsComponent
  ],
  imports: [CommonModule, CatalogRoutingModule, CarouselModule, MaterialModule, ReactiveFormsModule],
})
export class CatalogModule {}

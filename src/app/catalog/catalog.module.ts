import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CatalogComponent } from './container/catalog/catalog.component';
import { CatalogRoutingModule } from './catalog-routing.module';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [ProductComponent, ProductListComponent, CatalogComponent],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    MaterialModule
  ]
})
export class CatalogModule { }

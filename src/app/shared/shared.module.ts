import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./navbar/navbar.component";
import { MaterialModule } from "../material/material.module";
import { FooterComponent } from "./footer/footer.component";
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [NavbarComponent, FooterComponent],
})
export class SharedModule {}

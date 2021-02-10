import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./navbar/navbar.component";
import { MaterialModule } from "../material/material.module";
import { FooterComponent } from "./footer/footer.component";

@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [CommonModule, MaterialModule],
  exports: [NavbarComponent, FooterComponent],
})
export class SharedModule {}

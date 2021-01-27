import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './container/main/main.component';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { MaterialModule } from '../material/material.module';




@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule, 
    MaterialModule,
    
  ]
})
export class UsuarioModule { }

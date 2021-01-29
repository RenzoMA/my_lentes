import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./container/main/main.component";
import { NuevoUsuarioComponent } from "./container/nuevo-usuario/nuevo-usuario.component";
import { EditarUsuarioComponent } from './container/editar-usuario/editar-usuario.component';

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    pathMatch: 'full'
  },
  {
    path: "nuevo",
    component: NuevoUsuarioComponent,
  },
  {
    path: "editar/:id",
    component: EditarUsuarioComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioRoutingModule {}

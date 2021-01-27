import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./container/main/main.component";
import { NuevoUsuarioComponent } from "./container/nuevo-usuario/nuevo-usuario.component";
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioRoutingModule {}

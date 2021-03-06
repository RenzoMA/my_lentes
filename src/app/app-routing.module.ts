import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SessionGuardGuard } from './session-guard.guard';

const routes: Routes = [
  {
    path: "catalog",
    loadChildren: () => import("./catalog/catalog.module").then((m) => m.CatalogModule),
  },
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule),
  },
  {
    path: "ventas",
    canActivate: [SessionGuardGuard],
    loadChildren: () =>
      import("./ventas/ventas.module").then((m) => m.VentasModule),
  },
  {
    path: "inventario",
    canActivate: [SessionGuardGuard],
    loadChildren: () =>
      import("./inventario/inventario.module").then((m) => m.InventarioModule),
  },
  {
    path: "clientes",
    canActivate: [SessionGuardGuard],
    loadChildren: () =>
      import("./clientes/clientes.module").then((m) => m.ClientesModule),
  },
  {
    path: "reportes",
    canActivate: [SessionGuardGuard],
    loadChildren: () =>
      import("./reportes/reportes.module").then((m) => m.ReportesModule),
  },
  {
    path: "home",
    canActivate: [SessionGuardGuard],
    loadChildren: () => import("./home/home.module").then((m) => m.HomeModule),
  },
  {
    path: "usuario",
    canActivate: [SessionGuardGuard],
    loadChildren: () => import("./usuario/usuario.module").then((m) => m.UsuarioModule),
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "catalog",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

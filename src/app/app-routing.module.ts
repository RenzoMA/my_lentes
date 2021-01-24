import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule),
  },
  {
    path: "ventas",
    loadChildren: () =>
      import("./ventas/ventas.module").then((m) => m.VentasModule),
  },
  {
    path: "inventario",
    loadChildren: () =>
      import("./inventario/inventario.module").then((m) => m.InventarioModule),
  },
  {
    path: "clientes",
    loadChildren: () =>
      import("./clientes/clientes.module").then((m) => m.ClientesModule),
  },
  {
    path: "reportes",
    loadChildren: () =>
      import("./reportes/reportes.module").then((m) => m.ReportesModule),
  },
  {
    path: "home",
    loadChildren: () => import("./home/home.module").then((m) => m.HomeModule),
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

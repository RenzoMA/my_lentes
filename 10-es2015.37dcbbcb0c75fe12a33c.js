(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"+yQv":function(t,n,e){"use strict";e.r(n);var a=e("ofXK"),c=e("tyNb"),i=e("fXoL"),o=e("bTqV"),r=e("NFeN");let b=(()=>{class t{constructor(t,n){this.router=t,this.route=n}ngOnInit(){}buscarVentaFecha(t){this.router.navigate(["busquedaVentaFecha"],{relativeTo:this.route})}buscarVentaMarca(t){this.router.navigate(["busquedaVentaMarca"],{relativeTo:this.route})}buscarIngresoMes(t){this.router.navigate(["busquedaIngresoMe"],{relativeTo:this.route})}buscarVentaCanal(t){this.router.navigate(["busquedaVentaCanal"],{relativeTo:this.route})}buscarInventario(t){this.router.navigate(["busquedaInventario"],{relativeTo:this.route})}buscarCliente(t){this.router.navigate(["buscarInventario"],{relativeTo:this.route})}}return t.\u0275fac=function(n){return new(n||t)(i.Ob(c.c),i.Ob(c.a))},t.\u0275cmp=i.Ib({type:t,selectors:[["app-main"]],decls:19,vars:0,consts:[[1,"row","mb-5"],[1,"col-sm-6"],[1,"card"],[1,"card-body"],[1,"card-title"],["mat-raised-button","","color","primary",3,"click"]],template:function(t,n){1&t&&(i.Ub(0,"div",0),i.Ub(1,"div",1),i.Ub(2,"div",2),i.Ub(3,"div",3),i.Ub(4,"h1",4),i.Dc(5,"Reporte de ventas por fecha"),i.Tb(),i.Ub(6,"button",5),i.cc("click",(function(t){return n.buscarVentaFecha(t)})),i.Ub(7,"mat-icon"),i.Dc(8,"search"),i.Tb(),i.Dc(9,"Buscar "),i.Tb(),i.Tb(),i.Tb(),i.Tb(),i.Ub(10,"div",1),i.Ub(11,"div",2),i.Ub(12,"div",3),i.Ub(13,"h1",4),i.Dc(14,"Reporte de ventas por marca"),i.Tb(),i.Ub(15,"button",5),i.cc("click",(function(t){return n.buscarVentaMarca(t)})),i.Ub(16,"mat-icon"),i.Dc(17,"search"),i.Tb(),i.Dc(18,"Buscar "),i.Tb(),i.Tb(),i.Tb(),i.Tb(),i.Tb())},directives:[o.a,r.a],styles:["button[_ngcontent-%COMP%]{width:100%}h1[_ngcontent-%COMP%]{text-align:center}"]}),t})();var l=e("kmnG"),s=e("qFsG"),p=e("iadO"),d=e("f0Cb");let m=(()=>{class t{constructor(t){this.location=t}ngOnInit(){}cancel(t){this.location.back()}}return t.\u0275fac=function(n){return new(n||t)(i.Ob(a.g))},t.\u0275cmp=i.Ib({type:t,selectors:[["app-venta-fecha"]],decls:32,vars:4,consts:[[1,"venta-fecha","mat-elevation-z8"],[1,"section-container"],[1,"input-list"],["matInput","",3,"matDatepicker"],["matSuffix","",3,"for"],["picker1",""],["picker2",""],[1,"actions"],["mat-flat-button","",3,"click"],["mat-raised-button","","color","warn"],["mat-raised-button","","color","primary"]],template:function(t,n){if(1&t&&(i.Ub(0,"div",0),i.Ub(1,"div",1),i.Ub(2,"h2"),i.Dc(3,"Reporte de ventas por fecha"),i.Tb(),i.Ub(4,"div",2),i.Ub(5,"mat-form-field"),i.Ub(6,"mat-label"),i.Dc(7,"Fecha desde"),i.Tb(),i.Pb(8,"input",3),i.Pb(9,"mat-datepicker-toggle",4),i.Pb(10,"mat-datepicker",null,5),i.Tb(),i.Ub(12,"mat-form-field"),i.Ub(13,"mat-label"),i.Dc(14,"Fecha hasta"),i.Tb(),i.Pb(15,"input",3),i.Pb(16,"mat-datepicker-toggle",4),i.Pb(17,"mat-datepicker",null,6),i.Tb(),i.Tb(),i.Tb(),i.Pb(19,"mat-divider"),i.Pb(20,"mat-divider"),i.Ub(21,"div",7),i.Ub(22,"button",8),i.cc("click",(function(t){return n.cancel(t)})),i.Dc(23,"Cancelar"),i.Tb(),i.Ub(24,"button",9),i.Ub(25,"mat-icon"),i.Dc(26,"delete"),i.Tb(),i.Dc(27,"Borrar"),i.Tb(),i.Ub(28,"button",10),i.Ub(29,"mat-icon"),i.Dc(30,"description"),i.Tb(),i.Dc(31,"Generar"),i.Tb(),i.Tb(),i.Tb()),2&t){const t=i.sc(11),n=i.sc(18);i.Cb(8),i.lc("matDatepicker",t),i.Cb(1),i.lc("for",t),i.Cb(6),i.lc("matDatepicker",n),i.Cb(1),i.lc("for",n)}},directives:[l.b,l.e,s.b,p.b,p.d,l.g,p.a,d.a,o.a,r.a],styles:[".venta-fecha[_ngcontent-%COMP%]{padding:20px}.section-container[_ngcontent-%COMP%]:not(:first-child){padding-top:20px}.section-container[_ngcontent-%COMP%]{padding-bottom:20px}.input-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.input-list[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{margin-right:20px;width:300px}.actions[_ngcontent-%COMP%]{padding-top:20px;display:flex;justify-content:flex-end}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:8px}@media screen and (max-width:600px){.actions[_ngcontent-%COMP%]{flex-wrap:wrap}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;margin-top:8px}}"]}),t})();var u=e("d3UM"),f=e("FKr1");const g=[{path:"",component:b},{path:"busquedaVentaFecha",component:m},{path:"busquedaVentaMarca",component:(()=>{class t{constructor(t){this.location=t}ngOnInit(){}cancel(t){this.location.back()}}return t.\u0275fac=function(n){return new(n||t)(i.Ob(a.g))},t.\u0275cmp=i.Ib({type:t,selectors:[["app-venta-marca"]],decls:43,vars:4,consts:[[1,"venta-marca","mat-elevation-z8"],[1,"section-container"],["matInput","",3,"matDatepicker"],["matSuffix","",3,"for"],["picker1",""],["picker2",""],[1,"actions"],["mat-flat-button","",3,"click"],["mat-raised-button","","color","warn"],["mat-raised-button","","color","primary"]],template:function(t,n){if(1&t&&(i.Ub(0,"div",0),i.Ub(1,"div",1),i.Ub(2,"h2"),i.Dc(3,"Reporte de ventas por marca"),i.Tb(),i.Ub(4,"mat-form-field"),i.Ub(5,"mat-label"),i.Dc(6,"Fecha desde"),i.Tb(),i.Pb(7,"input",2),i.Pb(8,"mat-datepicker-toggle",3),i.Pb(9,"mat-datepicker",null,4),i.Tb(),i.Ub(11,"mat-form-field"),i.Ub(12,"mat-label"),i.Dc(13,"Fecha hasta"),i.Tb(),i.Pb(14,"input",2),i.Pb(15,"mat-datepicker-toggle",3),i.Pb(16,"mat-datepicker",null,5),i.Tb(),i.Ub(18,"mat-form-field"),i.Ub(19,"mat-label"),i.Dc(20,"Marca"),i.Tb(),i.Ub(21,"mat-select"),i.Ub(22,"mat-option"),i.Dc(23,"None"),i.Tb(),i.Tb(),i.Tb(),i.Ub(24,"mat-form-field"),i.Ub(25,"mat-label"),i.Dc(26,"Canal"),i.Tb(),i.Ub(27,"mat-select"),i.Ub(28,"mat-option"),i.Dc(29,"None"),i.Tb(),i.Tb(),i.Tb(),i.Tb(),i.Pb(30,"mat-divider"),i.Pb(31,"mat-divider"),i.Ub(32,"div",6),i.Ub(33,"button",7),i.cc("click",(function(t){return n.cancel(t)})),i.Dc(34,"Cancelar"),i.Tb(),i.Ub(35,"button",8),i.Ub(36,"mat-icon"),i.Dc(37,"delete"),i.Tb(),i.Dc(38,"Borrar"),i.Tb(),i.Ub(39,"button",9),i.Ub(40,"mat-icon"),i.Dc(41,"description"),i.Tb(),i.Dc(42,"Generar"),i.Tb(),i.Tb(),i.Tb()),2&t){const t=i.sc(10),n=i.sc(17);i.Cb(7),i.lc("matDatepicker",t),i.Cb(1),i.lc("for",t),i.Cb(6),i.lc("matDatepicker",n),i.Cb(1),i.lc("for",n)}},directives:[l.b,l.e,s.b,p.b,p.d,l.g,p.a,u.a,f.k,d.a,o.a,r.a],styles:[".venta-marca[_ngcontent-%COMP%]{padding:20px}.section-container[_ngcontent-%COMP%]:not(:first-child){padding-top:20px}.section-container[_ngcontent-%COMP%]{padding-bottom:20px}.input-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.input-list[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{margin-right:20px;width:300px}.actions[_ngcontent-%COMP%]{padding-top:20px;display:flex;justify-content:flex-end}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:8px}@media screen and (max-width:600px){.actions[_ngcontent-%COMP%]{flex-wrap:wrap}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;margin-top:8px}}"]}),t})()},{path:"busquedaIngresoMe",component:(()=>{class t{constructor(t){this.location=t}ngOnInit(){}cancel(t){this.location.back()}}return t.\u0275fac=function(n){return new(n||t)(i.Ob(a.g))},t.\u0275cmp=i.Ib({type:t,selectors:[["app-ingreso-mes"]],decls:32,vars:4,consts:[[1,"ingreso-mes","mat-elevation-z8"],[1,"section-container"],[1,"input-list"],["matInput","",3,"matDatepicker"],["matSuffix","",3,"for"],["picker1",""],["picker2",""],[1,"actions"],["mat-flat-button","",3,"click"],["mat-raised-button","","color","warn"],["mat-raised-button","","color","primary"]],template:function(t,n){if(1&t&&(i.Ub(0,"div",0),i.Ub(1,"div",1),i.Ub(2,"h2"),i.Dc(3,"Reporte de ventas por marca"),i.Tb(),i.Ub(4,"div",2),i.Ub(5,"mat-form-field"),i.Ub(6,"mat-label"),i.Dc(7,"Fecha desde"),i.Tb(),i.Pb(8,"input",3),i.Pb(9,"mat-datepicker-toggle",4),i.Pb(10,"mat-datepicker",null,5),i.Tb(),i.Ub(12,"mat-form-field"),i.Ub(13,"mat-label"),i.Dc(14,"Fecha hasta"),i.Tb(),i.Pb(15,"input",3),i.Pb(16,"mat-datepicker-toggle",4),i.Pb(17,"mat-datepicker",null,6),i.Tb(),i.Tb(),i.Tb(),i.Pb(19,"mat-divider"),i.Pb(20,"mat-divider"),i.Ub(21,"div",7),i.Ub(22,"button",8),i.cc("click",(function(t){return n.cancel(t)})),i.Dc(23,"Cancelar"),i.Tb(),i.Ub(24,"button",9),i.Ub(25,"mat-icon"),i.Dc(26,"delete"),i.Tb(),i.Dc(27,"Borrar"),i.Tb(),i.Ub(28,"button",10),i.Ub(29,"mat-icon"),i.Dc(30,"description"),i.Tb(),i.Dc(31,"Generar"),i.Tb(),i.Tb(),i.Tb()),2&t){const t=i.sc(11),n=i.sc(18);i.Cb(8),i.lc("matDatepicker",t),i.Cb(1),i.lc("for",t),i.Cb(6),i.lc("matDatepicker",n),i.Cb(1),i.lc("for",n)}},directives:[l.b,l.e,s.b,p.b,p.d,l.g,p.a,d.a,o.a,r.a],styles:[".ingreso-mes[_ngcontent-%COMP%]{padding:20px}.section-container[_ngcontent-%COMP%]:not(:first-child){padding-top:20px}.section-container[_ngcontent-%COMP%]{padding-bottom:20px}.input-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.input-list[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{margin-right:20px;width:300px}.actions[_ngcontent-%COMP%]{padding-top:20px;display:flex;justify-content:flex-end}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:8px}@media screen and (max-width:600px){.actions[_ngcontent-%COMP%]{flex-wrap:wrap}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;margin-top:8px}}"]}),t})()},{path:"busquedaVentaCanal",component:(()=>{class t{constructor(t){this.location=t}ngOnInit(){}cancel(t){this.location.back()}}return t.\u0275fac=function(n){return new(n||t)(i.Ob(a.g))},t.\u0275cmp=i.Ib({type:t,selectors:[["app-venta-canal"]],decls:44,vars:4,consts:[[1,"venta-canal","mat-elevation-z8"],[1,"section-container"],[1,"input-list"],["matInput","",3,"matDatepicker"],["matSuffix","",3,"for"],["picker1",""],["picker2",""],[1,"actions"],["mat-flat-button","",3,"click"],["mat-raised-button","","color","warn"],["mat-raised-button","","color","primary"]],template:function(t,n){if(1&t&&(i.Ub(0,"div",0),i.Ub(1,"div",1),i.Ub(2,"h2"),i.Dc(3,"Reporte de ventas por marca"),i.Tb(),i.Ub(4,"div",2),i.Ub(5,"mat-form-field"),i.Ub(6,"mat-label"),i.Dc(7,"Fecha desde"),i.Tb(),i.Pb(8,"input",3),i.Pb(9,"mat-datepicker-toggle",4),i.Pb(10,"mat-datepicker",null,5),i.Tb(),i.Ub(12,"mat-form-field"),i.Ub(13,"mat-label"),i.Dc(14,"Fecha hasta"),i.Tb(),i.Pb(15,"input",3),i.Pb(16,"mat-datepicker-toggle",4),i.Pb(17,"mat-datepicker",null,6),i.Tb(),i.Ub(19,"mat-form-field"),i.Ub(20,"mat-label"),i.Dc(21,"Marca"),i.Tb(),i.Ub(22,"mat-select"),i.Ub(23,"mat-option"),i.Dc(24,"None"),i.Tb(),i.Tb(),i.Tb(),i.Ub(25,"mat-form-field"),i.Ub(26,"mat-label"),i.Dc(27,"Canal"),i.Tb(),i.Ub(28,"mat-select"),i.Ub(29,"mat-option"),i.Dc(30,"None"),i.Tb(),i.Tb(),i.Tb(),i.Tb(),i.Tb(),i.Pb(31,"mat-divider"),i.Pb(32,"mat-divider"),i.Ub(33,"div",7),i.Ub(34,"button",8),i.cc("click",(function(t){return n.cancel(t)})),i.Dc(35,"Cancelar"),i.Tb(),i.Ub(36,"button",9),i.Ub(37,"mat-icon"),i.Dc(38,"delete"),i.Tb(),i.Dc(39,"Borrar "),i.Tb(),i.Ub(40,"button",10),i.Ub(41,"mat-icon"),i.Dc(42,"description"),i.Tb(),i.Dc(43,"Generar "),i.Tb(),i.Tb(),i.Tb()),2&t){const t=i.sc(11),n=i.sc(18);i.Cb(8),i.lc("matDatepicker",t),i.Cb(1),i.lc("for",t),i.Cb(6),i.lc("matDatepicker",n),i.Cb(1),i.lc("for",n)}},directives:[l.b,l.e,s.b,p.b,p.d,l.g,p.a,u.a,f.k,d.a,o.a,r.a],styles:[".venta-canal[_ngcontent-%COMP%]{padding:20px}.section-container[_ngcontent-%COMP%]:not(:first-child){padding-top:20px}.section-container[_ngcontent-%COMP%]{padding-bottom:20px}.input-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.input-list[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{margin-right:20px;width:300px}.actions[_ngcontent-%COMP%]{padding-top:20px;display:flex;justify-content:flex-end}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:8px}@media screen and (max-width:600px){.actions[_ngcontent-%COMP%]{flex-wrap:wrap}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;margin-top:8px}}"]}),t})()},{path:"busquedaInventario",component:(()=>{class t{constructor(t){this.location=t}ngOnInit(){}cancel(t){this.location.back()}}return t.\u0275fac=function(n){return new(n||t)(i.Ob(a.g))},t.\u0275cmp=i.Ib({type:t,selectors:[["app-inventario"]],decls:32,vars:4,consts:[[1,"busca-inventario","mat-elevation-z8"],[1,"section-container"],[1,"input-list"],["matInput","",3,"matDatepicker"],["matSuffix","",3,"for"],["picker1",""],["picker2",""],[1,"actions"],["mat-flat-button","",3,"click"],["mat-raised-button","","color","warn"],["mat-raised-button","","color","primary"]],template:function(t,n){if(1&t&&(i.Ub(0,"div",0),i.Ub(1,"div",1),i.Ub(2,"h2"),i.Dc(3,"Reporte de ventas por marca"),i.Tb(),i.Ub(4,"div",2),i.Ub(5,"mat-form-field"),i.Ub(6,"mat-label"),i.Dc(7,"Fecha desde"),i.Tb(),i.Pb(8,"input",3),i.Pb(9,"mat-datepicker-toggle",4),i.Pb(10,"mat-datepicker",null,5),i.Tb(),i.Ub(12,"mat-form-field"),i.Ub(13,"mat-label"),i.Dc(14,"Fecha hasta"),i.Tb(),i.Pb(15,"input",3),i.Pb(16,"mat-datepicker-toggle",4),i.Pb(17,"mat-datepicker",null,6),i.Tb(),i.Tb(),i.Tb(),i.Pb(19,"mat-divider"),i.Pb(20,"mat-divider"),i.Ub(21,"div",7),i.Ub(22,"button",8),i.cc("click",(function(t){return n.cancel(t)})),i.Dc(23,"Cancelar"),i.Tb(),i.Ub(24,"button",9),i.Ub(25,"mat-icon"),i.Dc(26,"delete"),i.Tb(),i.Dc(27,"Borrar"),i.Tb(),i.Ub(28,"button",10),i.Ub(29,"mat-icon"),i.Dc(30,"description"),i.Tb(),i.Dc(31,"Generar"),i.Tb(),i.Tb(),i.Tb()),2&t){const t=i.sc(11),n=i.sc(18);i.Cb(8),i.lc("matDatepicker",t),i.Cb(1),i.lc("for",t),i.Cb(6),i.lc("matDatepicker",n),i.Cb(1),i.lc("for",n)}},directives:[l.b,l.e,s.b,p.b,p.d,l.g,p.a,d.a,o.a,r.a],styles:[".busca-inventario[_ngcontent-%COMP%]{padding:20px}.section-container[_ngcontent-%COMP%]:not(:first-child){padding-top:20px}.section-container[_ngcontent-%COMP%]{padding-bottom:20px}.input-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.input-list[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{margin-right:20px;width:300px}.actions[_ngcontent-%COMP%]{padding-top:20px;display:flex;justify-content:flex-end}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:8px}@media screen and (max-width:600px){.actions[_ngcontent-%COMP%]{flex-wrap:wrap}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;margin-top:8px}}"]}),t})()},{path:"buscarInventario",component:(()=>{class t{constructor(t){this.location=t}ngOnInit(){}cancel(t){this.location.back()}}return t.\u0275fac=function(n){return new(n||t)(i.Ob(a.g))},t.\u0275cmp=i.Ib({type:t,selectors:[["app-cliente"]],decls:32,vars:4,consts:[[1,"busca-cliente","mat-elevation-z8"],[1,"section-container"],[1,"input-list"],["matInput","",3,"matDatepicker"],["matSuffix","",3,"for"],["picker1",""],["picker2",""],[1,"actions"],["mat-flat-button","",3,"click"],["mat-raised-button","","color","warn"],["mat-raised-button","","color","primary"]],template:function(t,n){if(1&t&&(i.Ub(0,"div",0),i.Ub(1,"div",1),i.Ub(2,"h2"),i.Dc(3,"Reporte de ventas por fecha"),i.Tb(),i.Ub(4,"div",2),i.Ub(5,"mat-form-field"),i.Ub(6,"mat-label"),i.Dc(7,"Fecha desde"),i.Tb(),i.Pb(8,"input",3),i.Pb(9,"mat-datepicker-toggle",4),i.Pb(10,"mat-datepicker",null,5),i.Tb(),i.Ub(12,"mat-form-field"),i.Ub(13,"mat-label"),i.Dc(14,"Fecha hasta"),i.Tb(),i.Pb(15,"input",3),i.Pb(16,"mat-datepicker-toggle",4),i.Pb(17,"mat-datepicker",null,6),i.Tb(),i.Tb(),i.Tb(),i.Pb(19,"mat-divider"),i.Pb(20,"mat-divider"),i.Ub(21,"div",7),i.Ub(22,"button",8),i.cc("click",(function(t){return n.cancel(t)})),i.Dc(23,"Cancelar"),i.Tb(),i.Ub(24,"button",9),i.Ub(25,"mat-icon"),i.Dc(26,"delete"),i.Tb(),i.Dc(27,"Borrar"),i.Tb(),i.Ub(28,"button",10),i.Ub(29,"mat-icon"),i.Dc(30,"description"),i.Tb(),i.Dc(31,"Generar"),i.Tb(),i.Tb(),i.Tb()),2&t){const t=i.sc(11),n=i.sc(18);i.Cb(8),i.lc("matDatepicker",t),i.Cb(1),i.lc("for",t),i.Cb(6),i.lc("matDatepicker",n),i.Cb(1),i.lc("for",n)}},directives:[l.b,l.e,s.b,p.b,p.d,l.g,p.a,d.a,o.a,r.a],styles:[".busca-cliente[_ngcontent-%COMP%]{padding:20px}.section-container[_ngcontent-%COMP%]:not(:first-child){padding-top:20px}.section-container[_ngcontent-%COMP%]{padding-bottom:20px}.input-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.input-list[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{margin-right:20px;width:300px}.actions[_ngcontent-%COMP%]{padding-top:20px;display:flex;justify-content:flex-end}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:8px}@media screen and (max-width:600px){.actions[_ngcontent-%COMP%]{flex-wrap:wrap}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;margin-top:8px}}"]}),t})()}];let P=(()=>{class t{}return t.\u0275mod=i.Mb({type:t}),t.\u0275inj=i.Lb({factory:function(n){return new(n||t)},imports:[[c.e.forChild(g)],c.e]}),t})();var T=e("hctd");e.d(n,"ReportesModule",(function(){return U}));let U=(()=>{class t{}return t.\u0275mod=i.Mb({type:t}),t.\u0275inj=i.Lb({factory:function(n){return new(n||t)},imports:[[a.c,P,T.a]]}),t})()}}]);
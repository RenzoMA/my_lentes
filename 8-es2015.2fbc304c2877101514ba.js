(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"3HbQ":function(t,n,e){"use strict";e.r(n);var a=e("ofXK"),c=e("tyNb"),i=e("fXoL"),o=e("bTqV"),b=e("NFeN"),l=e("kmnG"),r=e("qFsG"),m=e("d3UM"),d=e("FKr1"),s=e("+0xr"),p=e("M9IT");function f(t,n){1&t&&(i.Ub(0,"th",22),i.Dc(1,"C\xf3digo"),i.Tb())}function u(t,n){if(1&t&&(i.Ub(0,"td",23),i.Dc(1),i.Tb()),2&t){const t=n.$implicit;i.Cb(1),i.Ec(t.codigo)}}function T(t,n){1&t&&(i.Ub(0,"th",22),i.Dc(1,"Nombre"),i.Tb())}function U(t,n){if(1&t&&(i.Ub(0,"td",23),i.Dc(1),i.Tb()),2&t){const t=n.$implicit;i.Cb(1),i.Ec(t.nombre)}}function g(t,n){1&t&&(i.Ub(0,"th",22),i.Dc(1,"Tipo de cliente"),i.Tb())}function C(t,n){if(1&t&&(i.Ub(0,"td",23),i.Dc(1),i.Tb()),2&t){const t=n.$implicit;i.Cb(1),i.Ec(t.tipo)}}function D(t,n){1&t&&(i.Ub(0,"th",22),i.Dc(1,"Categor\xeda"),i.Tb())}function P(t,n){if(1&t&&(i.Ub(0,"td",23),i.Dc(1),i.Tb()),2&t){const t=n.$implicit;i.Cb(1),i.Ec(t.categoria)}}function v(t,n){1&t&&(i.Ub(0,"th",22),i.Dc(1,"Canal principal"),i.Tb())}function h(t,n){if(1&t&&(i.Ub(0,"td",23),i.Dc(1),i.Tb()),2&t){const t=n.$implicit;i.Cb(1),i.Ec(t.canal)}}function O(t,n){1&t&&i.Pb(0,"tr",24)}const M=function(t){return{"row-selected":t}};function _(t,n){if(1&t){const t=i.Vb();i.Ub(0,"tr",25),i.cc("click",(function(){i.vc(t);const e=n.$implicit;return i.gc().updateSelected(e)})),i.Tb()}if(2&t){const t=n.$implicit,e=i.gc();i.lc("ngClass",i.nc(1,M,e.selectedId===t.codigo))}}const w=function(){return[5,10,25,100]},x=[{codigo:"1",tipo:"test",canal:"canal",categoria:"category",nombre:"my name"},{codigo:"2",tipo:"test",canal:"canal",categoria:"category",nombre:"my name"},{codigo:"3",tipo:"test",canal:"canal",categoria:"category",nombre:"my name"},{codigo:"4",tipo:"test",canal:"canal",categoria:"category",nombre:"my name"}];let y=(()=>{class t{constructor(t,n){this.router=t,this.route=n,this.selectedId="",this.displayedColumns=["codigo","nombre","tipo","categoria","canal"],this.dataSource=x}ngOnInit(){}nuevoCliente(t){this.router.navigate(["nuevo"],{relativeTo:this.route})}updateSelected(t){this.selectedId=this.selectedId===t.codigo?"":t.codigo}modificarCliente(t){this.router.navigate(["editar",this.selectedId],{relativeTo:this.route})}}return t.\u0275fac=function(n){return new(n||t)(i.Ob(c.c),i.Ob(c.a))},t.\u0275cmp=i.Ib({type:t,selectors:[["app-main"]],decls:64,vars:9,consts:[[1,"actions"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","color","accent",3,"disabled","click"],["mat-raised-button","","color","warn",3,"disabled"],[1,"filters"],[1,"input-list"],["type","text","matInput",""],[1,"filter-actions"],["mat-raised-button","","color","primary"],["mat-raised-button","","color","warn"],[1,"table-wrapper"],["mat-table","",1,"mat-elevation-z8","tabla-clientes",3,"dataSource"],["matColumnDef","codigo"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","nombre"],["matColumnDef","tipo"],["matColumnDef","categoria"],["matColumnDef","canal"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"ngClass","click",4,"matRowDef","matRowDefColumns"],[3,"length","pageSize","pageSizeOptions"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row","",3,"ngClass","click"]],template:function(t,n){1&t&&(i.Ub(0,"div",0),i.Ub(1,"button",1),i.cc("click",(function(t){return n.nuevoCliente(t)})),i.Ub(2,"mat-icon"),i.Dc(3," group_add"),i.Tb(),i.Dc(4," Nuevo Cliente "),i.Tb(),i.Ub(5,"button",2),i.cc("click",(function(t){return n.modificarCliente(t)})),i.Ub(6,"mat-icon"),i.Dc(7," supervised_user_circle"),i.Tb(),i.Dc(8,"Modificar Cliente"),i.Tb(),i.Ub(9,"button",3),i.Ub(10,"mat-icon"),i.Dc(11," person_remove"),i.Tb(),i.Dc(12,"Eliminar Cliente"),i.Tb(),i.Tb(),i.Ub(13,"div"),i.Dc(14,"Filtar Clientes:"),i.Tb(),i.Ub(15,"div",4),i.Ub(16,"div",5),i.Ub(17,"mat-form-field"),i.Ub(18,"mat-label"),i.Dc(19,"Nombre cliente"),i.Tb(),i.Pb(20,"input",6),i.Tb(),i.Ub(21,"mat-form-field"),i.Ub(22,"mat-label"),i.Dc(23,"Documento"),i.Tb(),i.Pb(24,"input",6),i.Tb(),i.Ub(25,"mat-form-field"),i.Ub(26,"mat-label"),i.Dc(27,"Estado"),i.Tb(),i.Ub(28,"mat-select"),i.Ub(29,"mat-option"),i.Dc(30," Activo "),i.Tb(),i.Ub(31,"mat-option"),i.Dc(32," Inactivo "),i.Tb(),i.Tb(),i.Tb(),i.Tb(),i.Ub(33,"div",7),i.Ub(34,"button",8),i.Ub(35,"mat-icon"),i.Dc(36,"search"),i.Tb(),i.Dc(37,"Filtrar"),i.Tb(),i.Ub(38,"button",9),i.Ub(39,"mat-icon"),i.Dc(40,"clear"),i.Tb(),i.Dc(41,"Borrar"),i.Tb(),i.Tb(),i.Tb(),i.Ub(42,"div"),i.Dc(43,"Ultimas ventas:"),i.Tb(),i.Ub(44,"div",10),i.Ub(45,"table",11),i.Sb(46,12),i.Cc(47,f,2,0,"th",13),i.Cc(48,u,2,1,"td",14),i.Rb(),i.Sb(49,15),i.Cc(50,T,2,0,"th",13),i.Cc(51,U,2,1,"td",14),i.Rb(),i.Sb(52,16),i.Cc(53,g,2,0,"th",13),i.Cc(54,C,2,1,"td",14),i.Rb(),i.Sb(55,17),i.Cc(56,D,2,0,"th",13),i.Cc(57,P,2,1,"td",14),i.Rb(),i.Sb(58,18),i.Cc(59,v,2,0,"th",13),i.Cc(60,h,2,1,"td",14),i.Rb(),i.Cc(61,O,1,0,"tr",19),i.Cc(62,_,1,3,"tr",20),i.Tb(),i.Tb(),i.Pb(63,"mat-paginator",21)),2&t&&(i.Cb(5),i.lc("disabled",!n.selectedId),i.Cb(4),i.lc("disabled",!n.selectedId),i.Cb(36),i.lc("dataSource",n.dataSource),i.Cb(16),i.lc("matHeaderRowDef",n.displayedColumns),i.Cb(1),i.lc("matRowDefColumns",n.displayedColumns),i.Cb(1),i.lc("length",100)("pageSize",10)("pageSizeOptions",i.mc(8,w)))},directives:[o.a,b.a,l.b,l.e,r.b,m.a,d.k,s.j,s.c,s.e,s.b,s.g,s.i,p.a,s.d,s.a,s.f,s.h,a.j],styles:[".tabla-clientes[_ngcontent-%COMP%]{min-width:700px;margin-top:16px;width:100%}.table-wrapper[_ngcontent-%COMP%]{overflow-x:auto}.row-selected[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.12)}.actions[_ngcontent-%COMP%]{margin-bottom:16px}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-right:8px}@media screen and (max-width:600px){.actions[_ngcontent-%COMP%]{flex-wrap:wrap}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;margin-bottom:8px}}.filters[_ngcontent-%COMP%]{display:flex}.filters[_ngcontent-%COMP%]   .filter-actions[_ngcontent-%COMP%]{margin-left:16px;display:flex;align-items:center}.filters[_ngcontent-%COMP%]   .filter-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .filters[_ngcontent-%COMP%]   .input-list[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{margin-right:8px}@media screen and (max-width:600px){.filters[_ngcontent-%COMP%]{flex-wrap:wrap}.filters[_ngcontent-%COMP%]   .filter-actions[_ngcontent-%COMP%]{width:100%;margin:0;display:block}.filters[_ngcontent-%COMP%]   .filter-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:block;width:100%;margin:0 0 8px}.filters[_ngcontent-%COMP%]   .input-list[_ngcontent-%COMP%], .filters[_ngcontent-%COMP%]   .input-list[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}}"]}),t})();var k=e("iadO"),I=e("f0Cb");const S=[{path:"",component:y,pathMatch:"full"},{path:"nuevo",component:(()=>{class t{constructor(t){this.location=t}ngOnInit(){}cancel(t){this.location.back()}}return t.\u0275fac=function(n){return new(n||t)(i.Ob(a.h))},t.\u0275cmp=i.Ib({type:t,selectors:[["app-nuevo-cliente"]],decls:93,vars:2,consts:[[1,"nuevo-cliente","mat-elevation-z8"],[1,"section-container"],[1,"input-list"],["type","text","matInput",""],["matInput","",3,"matDatepicker"],["matSuffix","",3,"for"],["picker",""],[1,"actions"],["mat-flat-button","",3,"click"],["mat-raised-button","","color","warn"],["mat-raised-button","","color","primary"]],template:function(t,n){if(1&t&&(i.Ub(0,"div",0),i.Ub(1,"div",1),i.Ub(2,"h2"),i.Dc(3,"Datos Personales"),i.Tb(),i.Ub(4,"div",2),i.Ub(5,"mat-form-field"),i.Ub(6,"mat-label"),i.Dc(7,"Tipo doc identidad"),i.Tb(),i.Ub(8,"mat-select"),i.Ub(9,"mat-option"),i.Dc(10," Activo "),i.Tb(),i.Ub(11,"mat-option"),i.Dc(12," Inactivo "),i.Tb(),i.Tb(),i.Tb(),i.Ub(13,"mat-form-field"),i.Ub(14,"mat-label"),i.Dc(15,"Telefono"),i.Tb(),i.Pb(16,"input",3),i.Tb(),i.Ub(17,"mat-form-field"),i.Ub(18,"mat-label"),i.Dc(19,"Nombre"),i.Tb(),i.Pb(20,"input",3),i.Tb(),i.Ub(21,"mat-form-field"),i.Ub(22,"mat-label"),i.Dc(23,"Nombre Apellido"),i.Tb(),i.Pb(24,"input",3),i.Tb(),i.Ub(25,"mat-form-field"),i.Ub(26,"mat-label"),i.Dc(27,"Doc Identidad"),i.Tb(),i.Pb(28,"input",3),i.Tb(),i.Ub(29,"mat-form-field"),i.Ub(30,"mat-label"),i.Dc(31,"Correo"),i.Tb(),i.Pb(32,"input",3),i.Tb(),i.Ub(33,"mat-form-field"),i.Ub(34,"mat-label"),i.Dc(35,"Direcci\xf3n"),i.Tb(),i.Pb(36,"input",3),i.Tb(),i.Ub(37,"mat-form-field"),i.Ub(38,"mat-label"),i.Dc(39,"Canal Principal"),i.Tb(),i.Ub(40,"mat-select"),i.Ub(41,"mat-option"),i.Dc(42," Activo "),i.Tb(),i.Ub(43,"mat-option"),i.Dc(44," Inactivo "),i.Tb(),i.Tb(),i.Tb(),i.Ub(45,"mat-form-field"),i.Ub(46,"mat-label"),i.Dc(47,"Fecha cumplea\xf1os"),i.Tb(),i.Pb(48,"input",4),i.Pb(49,"mat-datepicker-toggle",5),i.Pb(50,"mat-datepicker",null,6),i.Tb(),i.Ub(52,"mat-form-field"),i.Ub(53,"mat-label"),i.Dc(54,"Enlace RRSS 2"),i.Tb(),i.Pb(55,"input",3),i.Tb(),i.Ub(56,"mat-form-field"),i.Ub(57,"mat-label"),i.Dc(58,"Enlace RRSS 1"),i.Tb(),i.Pb(59,"input",3),i.Tb(),i.Tb(),i.Tb(),i.Pb(60,"mat-divider"),i.Ub(61,"div",1),i.Ub(62,"h2"),i.Dc(63,"Datos Comerciales"),i.Tb(),i.Ub(64,"div",2),i.Ub(65,"mat-form-field"),i.Ub(66,"mat-label"),i.Dc(67,"Categoria"),i.Tb(),i.Ub(68,"mat-select"),i.Ub(69,"mat-option"),i.Dc(70," Activo "),i.Tb(),i.Ub(71,"mat-option"),i.Dc(72," Inactivo "),i.Tb(),i.Tb(),i.Tb(),i.Ub(73,"mat-form-field"),i.Ub(74,"mat-label"),i.Dc(75,"Tipo de cliente"),i.Tb(),i.Ub(76,"mat-select"),i.Ub(77,"mat-option"),i.Dc(78," Activo "),i.Tb(),i.Ub(79,"mat-option"),i.Dc(80," Inactivo "),i.Tb(),i.Tb(),i.Tb(),i.Tb(),i.Tb(),i.Pb(81,"mat-divider"),i.Ub(82,"div",7),i.Ub(83,"button",8),i.cc("click",(function(t){return n.cancel(t)})),i.Dc(84,"Cancelar"),i.Tb(),i.Ub(85,"button",9),i.Ub(86,"mat-icon"),i.Dc(87,"delete"),i.Tb(),i.Dc(88,"Borrar"),i.Tb(),i.Ub(89,"button",10),i.Ub(90,"mat-icon"),i.Dc(91,"save"),i.Tb(),i.Dc(92,"Guardar"),i.Tb(),i.Tb(),i.Tb()),2&t){const t=i.sc(51);i.Cb(48),i.lc("matDatepicker",t),i.Cb(1),i.lc("for",t)}},directives:[l.b,l.e,m.a,d.k,r.b,k.b,k.d,l.g,k.a,I.a,o.a,b.a],styles:[".nuevo-cliente[_ngcontent-%COMP%]{padding:20px}.section-container[_ngcontent-%COMP%]:not(:first-child){padding-top:20px}.section-container[_ngcontent-%COMP%]{padding-bottom:20px}.input-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.input-list[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{margin-right:20px;width:300px}.actions[_ngcontent-%COMP%]{padding-top:20px;display:flex;justify-content:flex-end}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:8px}@media screen and (max-width:600px){.actions[_ngcontent-%COMP%]{flex-wrap:wrap}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;margin-top:8px}}"]}),t})()},{path:"editar/:id",component:(()=>{class t{constructor(t){this.location=t}ngOnInit(){}cancel(t){this.location.back()}}return t.\u0275fac=function(n){return new(n||t)(i.Ob(a.h))},t.\u0275cmp=i.Ib({type:t,selectors:[["app-editar-cliente"]],decls:97,vars:2,consts:[[1,"nuevo-cliente","mat-elevation-z8"],[1,"section-container"],[1,"input-list"],["type","text","matInput","","disabled",""],["type","text","matInput",""],["matInput","",3,"matDatepicker"],["matSuffix","",3,"for"],["picker",""],[1,"actions"],["mat-flat-button","",3,"click"],["mat-raised-button","","color","warn"],["mat-raised-button","","color","primary"]],template:function(t,n){if(1&t&&(i.Ub(0,"div",0),i.Ub(1,"div",1),i.Ub(2,"h2"),i.Dc(3,"Datos Personales"),i.Tb(),i.Ub(4,"div",2),i.Ub(5,"mat-form-field"),i.Ub(6,"mat-label"),i.Dc(7,"Codigo"),i.Tb(),i.Pb(8,"input",3),i.Tb(),i.Ub(9,"mat-form-field"),i.Ub(10,"mat-label"),i.Dc(11,"Tipo doc identidad"),i.Tb(),i.Ub(12,"mat-select"),i.Ub(13,"mat-option"),i.Dc(14," Activo "),i.Tb(),i.Ub(15,"mat-option"),i.Dc(16," Inactivo "),i.Tb(),i.Tb(),i.Tb(),i.Ub(17,"mat-form-field"),i.Ub(18,"mat-label"),i.Dc(19,"Telefono"),i.Tb(),i.Pb(20,"input",4),i.Tb(),i.Ub(21,"mat-form-field"),i.Ub(22,"mat-label"),i.Dc(23,"Nombre"),i.Tb(),i.Pb(24,"input",4),i.Tb(),i.Ub(25,"mat-form-field"),i.Ub(26,"mat-label"),i.Dc(27,"Nombre Apellido"),i.Tb(),i.Pb(28,"input",4),i.Tb(),i.Ub(29,"mat-form-field"),i.Ub(30,"mat-label"),i.Dc(31,"Doc Identidad"),i.Tb(),i.Pb(32,"input",4),i.Tb(),i.Ub(33,"mat-form-field"),i.Ub(34,"mat-label"),i.Dc(35,"Correo"),i.Tb(),i.Pb(36,"input",4),i.Tb(),i.Ub(37,"mat-form-field"),i.Ub(38,"mat-label"),i.Dc(39,"Direcci\xf3n"),i.Tb(),i.Pb(40,"input",4),i.Tb(),i.Ub(41,"mat-form-field"),i.Ub(42,"mat-label"),i.Dc(43,"Canal Principal"),i.Tb(),i.Ub(44,"mat-select"),i.Ub(45,"mat-option"),i.Dc(46," Activo "),i.Tb(),i.Ub(47,"mat-option"),i.Dc(48," Inactivo "),i.Tb(),i.Tb(),i.Tb(),i.Ub(49,"mat-form-field"),i.Ub(50,"mat-label"),i.Dc(51,"Fecha cumplea\xf1os"),i.Tb(),i.Pb(52,"input",5),i.Pb(53,"mat-datepicker-toggle",6),i.Pb(54,"mat-datepicker",null,7),i.Tb(),i.Ub(56,"mat-form-field"),i.Ub(57,"mat-label"),i.Dc(58,"Enlace RRSS 2"),i.Tb(),i.Pb(59,"input",4),i.Tb(),i.Ub(60,"mat-form-field"),i.Ub(61,"mat-label"),i.Dc(62,"Enlace RRSS 1"),i.Tb(),i.Pb(63,"input",4),i.Tb(),i.Tb(),i.Tb(),i.Pb(64,"mat-divider"),i.Ub(65,"div",1),i.Ub(66,"h2"),i.Dc(67,"Datos Comerciales"),i.Tb(),i.Ub(68,"div",2),i.Ub(69,"mat-form-field"),i.Ub(70,"mat-label"),i.Dc(71,"Categoria"),i.Tb(),i.Ub(72,"mat-select"),i.Ub(73,"mat-option"),i.Dc(74," Activo "),i.Tb(),i.Ub(75,"mat-option"),i.Dc(76," Inactivo "),i.Tb(),i.Tb(),i.Tb(),i.Ub(77,"mat-form-field"),i.Ub(78,"mat-label"),i.Dc(79,"Tipo de cliente"),i.Tb(),i.Ub(80,"mat-select"),i.Ub(81,"mat-option"),i.Dc(82," Activo "),i.Tb(),i.Ub(83,"mat-option"),i.Dc(84," Inactivo "),i.Tb(),i.Tb(),i.Tb(),i.Tb(),i.Tb(),i.Pb(85,"mat-divider"),i.Ub(86,"div",8),i.Ub(87,"button",9),i.cc("click",(function(t){return n.cancel(t)})),i.Dc(88,"Cancelar"),i.Tb(),i.Ub(89,"button",10),i.Ub(90,"mat-icon"),i.Dc(91,"delete"),i.Tb(),i.Dc(92,"Borrar"),i.Tb(),i.Ub(93,"button",11),i.Ub(94,"mat-icon"),i.Dc(95,"save"),i.Tb(),i.Dc(96,"Guardar"),i.Tb(),i.Tb(),i.Tb()),2&t){const t=i.sc(55);i.Cb(52),i.lc("matDatepicker",t),i.Cb(1),i.lc("for",t)}},directives:[l.b,l.e,r.b,m.a,d.k,k.b,k.d,l.g,k.a,I.a,o.a,b.a],styles:[".nuevo-cliente[_ngcontent-%COMP%]{padding:20px}.section-container[_ngcontent-%COMP%]:not(:first-child){padding-top:20px}.section-container[_ngcontent-%COMP%]{padding-bottom:20px}.input-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.input-list[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{margin-right:20px;width:300px}.actions[_ngcontent-%COMP%]{padding-top:20px;display:flex;justify-content:flex-end}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:8px}@media screen and (max-width:600px){.actions[_ngcontent-%COMP%]{flex-wrap:wrap}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;margin-top:8px}}"]}),t})()}];let R=(()=>{class t{}return t.\u0275mod=i.Mb({type:t}),t.\u0275inj=i.Lb({factory:function(n){return new(n||t)},imports:[[c.e.forChild(S)],c.e]}),t})();var A=e("hctd");e.d(n,"ClientesModule",(function(){return E}));let E=(()=>{class t{}return t.\u0275mod=i.Mb({type:t}),t.\u0275inj=i.Lb({factory:function(n){return new(n||t)},imports:[[a.c,R,A.a]]}),t})()}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{isUK:function(t,a,n){"use strict";n.r(a);var c=n("ofXK"),e=n("tyNb"),o=n("fXoL"),i=n("bTqV"),b=n("NFeN"),l=n("kmnG"),r=n("qFsG"),d=n("iadO"),m=n("d3UM"),s=n("FKr1"),u=n("+0xr");function f(t,a){1&t&&(o.Ub(0,"th",27),o.yc(1,"C\xf3digo"),o.Tb())}function p(t,a){if(1&t&&(o.Ub(0,"td",28),o.yc(1),o.Tb()),2&t){const t=a.$implicit;o.Cb(1),o.zc(t.codigo)}}function g(t,a){1&t&&(o.Ub(0,"th",27),o.yc(1,"Cliente"),o.Tb())}function T(t,a){if(1&t&&(o.Ub(0,"td",28),o.yc(1),o.Tb()),2&t){const t=a.$implicit;o.Cb(1),o.zc(t.cliente)}}function C(t,a){1&t&&(o.Ub(0,"th",27),o.yc(1,"Documento"),o.Tb())}function U(t,a){if(1&t&&(o.Ub(0,"td",28),o.yc(1),o.Tb()),2&t){const t=a.$implicit;o.Cb(1),o.zc(t.documento)}}function y(t,a){1&t&&(o.Ub(0,"th",27),o.yc(1,"Fecha Venta"),o.Tb())}function h(t,a){if(1&t&&(o.Ub(0,"td",28),o.yc(1),o.Tb()),2&t){const t=a.$implicit;o.Cb(1),o.zc(t.fventa)}}function P(t,a){1&t&&(o.Ub(0,"th",27),o.yc(1,"Total"),o.Tb())}function x(t,a){if(1&t&&(o.Ub(0,"td",28),o.yc(1),o.Tb()),2&t){const t=a.$implicit;o.Cb(1),o.zc(t.total)}}function v(t,a){1&t&&(o.Ub(0,"th",27),o.yc(1,"Estado"),o.Tb())}function w(t,a){if(1&t&&(o.Ub(0,"td",28),o.yc(1),o.Tb()),2&t){const t=a.$implicit;o.Cb(1),o.zc(t.estado)}}function M(t,a){1&t&&(o.Ub(0,"th",27),o.yc(1,"Canal"),o.Tb())}function O(t,a){if(1&t&&(o.Ub(0,"td",28),o.yc(1),o.Tb()),2&t){const t=a.$implicit;o.Cb(1),o.zc(t.canal)}}function _(t,a){1&t&&o.Pb(0,"tr",29)}const D=function(t){return{"row-selected":t}};function S(t,a){if(1&t){const t=o.Vb();o.Ub(0,"tr",30),o.cc("click",(function(){o.rc(t);const n=a.$implicit;return o.gc().updateSelected(n)})),o.Tb()}if(2&t){const t=a.$implicit,n=o.gc();o.lc("ngClass",o.nc(1,D,n.selectedId===t.codigo))}}const k=[{codigo:"1",cliente:"Victor Morillo",documento:"12345678",fventa:"2020/12/05",total:"category",estado:"Entregado",canal:"Facebook"},{codigo:"2",cliente:"Juan Perez",documento:"12345678",fventa:"2020/12/05",total:"category",estado:"Entregado",canal:"Facebook"},{codigo:"3",cliente:"Carlos Sanchez",documento:"12345678",fventa:"2020/12/05",total:"category",estado:"Compra",canal:"Facebook"},{codigo:"4",cliente:"Johana Gutierrez",documento:"12345678",fventa:"2020/12/05",total:"category",estado:"Compra",canal:"Facebook"},{codigo:"5",cliente:"Jorge Valladares",documento:"12345678",fventa:"2020/12/05",total:"category",estado:"Compra",canal:"Facebook"}];let R=(()=>{class t{constructor(t,a){this.router=t,this.route=a,this.selectedId="",this.displayedColumns=["codigo","cliente","documento","fventa","total","estado","canal"],this.dataSource=k}ngOnInit(){}nuevaVenta(t){this.router.navigate(["nuevo"],{relativeTo:this.route})}updateSelected(t){this.selectedId=this.selectedId===t.codigo?"":t.codigo}modificarVenta(t){this.router.navigate(["editar",this.selectedId],{relativeTo:this.route})}}return t.\u0275fac=function(a){return new(a||t)(o.Ob(e.b),o.Ob(e.a))},t.\u0275cmp=o.Ib({type:t,selectors:[["app-main"]],decls:91,vars:9,consts:[[1,"actions"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","color","accent",3,"disabled","click"],["mat-raised-button","","color","warn",3,"disabled"],[1,"filters"],[1,"input-list"],["type","text","matInput",""],["appearance","fill"],["matInput","",3,"matDatepicker"],["matSuffix","",3,"for"],["picker1",""],["picker2",""],[1,"filter-actions"],["mat-raised-button","","color","primary"],["mat-raised-button","","color","warn"],["mat-table","",1,"mat-elevation-z8","tabla-ventas",3,"dataSource"],["matColumnDef","codigo"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","cliente"],["matColumnDef","documento"],["matColumnDef","fventa"],["matColumnDef","total"],["matColumnDef","estado"],["matColumnDef","canal"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"ngClass","click",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row","",3,"ngClass","click"]],template:function(t,a){if(1&t&&(o.Ub(0,"div",0),o.Ub(1,"button",1),o.cc("click",(function(t){return a.nuevaVenta(t)})),o.Ub(2,"mat-icon"),o.yc(3," add_shopping_cart"),o.Tb(),o.yc(4,"Nueva Venta"),o.Tb(),o.Ub(5,"button",2),o.cc("click",(function(t){return a.modificarVenta(t)})),o.Ub(6,"mat-icon"),o.yc(7," update"),o.Tb(),o.yc(8,"Modificar Venta"),o.Tb(),o.Ub(9,"button",3),o.Ub(10,"mat-icon"),o.yc(11," remove_shopping_cart"),o.Tb(),o.yc(12,"Anular Venta"),o.Tb(),o.Tb(),o.Ub(13,"div"),o.yc(14,"Filtrar Ventas:"),o.Tb(),o.Ub(15,"div",4),o.Ub(16,"div",5),o.Ub(17,"mat-form-field"),o.Ub(18,"mat-label"),o.yc(19,"Nombre cliente"),o.Tb(),o.Pb(20,"input",6),o.Tb(),o.Ub(21,"mat-form-field"),o.Ub(22,"mat-label"),o.yc(23,"Documento"),o.Tb(),o.Pb(24,"input",6),o.Tb(),o.Ub(25,"mat-form-field",7),o.Ub(26,"mat-label"),o.yc(27,"Fecha desde"),o.Tb(),o.Pb(28,"input",8),o.Pb(29,"mat-datepicker-toggle",9),o.Pb(30,"mat-datepicker",null,10),o.Tb(),o.Ub(32,"mat-form-field",7),o.Ub(33,"mat-label"),o.yc(34,"Fecha hasta"),o.Tb(),o.Pb(35,"input",8),o.Pb(36,"mat-datepicker-toggle",9),o.Pb(37,"mat-datepicker",null,11),o.Tb(),o.Ub(39,"mat-form-field"),o.Ub(40,"mat-label"),o.yc(41,"Estado"),o.Tb(),o.Ub(42,"mat-select"),o.Ub(43,"mat-option"),o.yc(44," Pagado "),o.Tb(),o.Ub(45,"mat-option"),o.yc(46," Entregado "),o.Tb(),o.Tb(),o.Tb(),o.Ub(47,"mat-form-field"),o.Ub(48,"mat-label"),o.yc(49,"Canal"),o.Tb(),o.Ub(50,"mat-select"),o.Ub(51,"mat-option"),o.yc(52," Facebook "),o.Tb(),o.Ub(53,"mat-option"),o.yc(54," Instagram "),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Ub(55,"div",12),o.Ub(56,"button",13),o.Ub(57,"mat-icon"),o.yc(58,"search"),o.Tb(),o.yc(59,"Filtrar"),o.Tb(),o.Ub(60,"button",14),o.Ub(61,"mat-icon"),o.yc(62,"delete"),o.Tb(),o.yc(63,"Borrar"),o.Tb(),o.Tb(),o.Ub(64,"div"),o.yc(65,"\xdaltimas ventas:"),o.Tb(),o.Ub(66,"div"),o.Ub(67,"table",15),o.Sb(68,16),o.xc(69,f,2,0,"th",17),o.xc(70,p,2,1,"td",18),o.Rb(),o.Sb(71,19),o.xc(72,g,2,0,"th",17),o.xc(73,T,2,1,"td",18),o.Rb(),o.Sb(74,20),o.xc(75,C,2,0,"th",17),o.xc(76,U,2,1,"td",18),o.Rb(),o.Sb(77,21),o.xc(78,y,2,0,"th",17),o.xc(79,h,2,1,"td",18),o.Rb(),o.Sb(80,22),o.xc(81,P,2,0,"th",17),o.xc(82,x,2,1,"td",18),o.Rb(),o.Sb(83,23),o.xc(84,v,2,0,"th",17),o.xc(85,w,2,1,"td",18),o.Rb(),o.Sb(86,24),o.xc(87,M,2,0,"th",17),o.xc(88,O,2,1,"td",18),o.Rb(),o.xc(89,_,1,0,"tr",25),o.xc(90,S,1,3,"tr",26),o.Tb(),o.Tb()),2&t){const t=o.pc(31),n=o.pc(38);o.Cb(5),o.lc("disabled",!a.selectedId),o.Cb(4),o.lc("disabled",!a.selectedId),o.Cb(19),o.lc("matDatepicker",t),o.Cb(1),o.lc("for",t),o.Cb(6),o.lc("matDatepicker",n),o.Cb(1),o.lc("for",n),o.Cb(31),o.lc("dataSource",a.dataSource),o.Cb(22),o.lc("matHeaderRowDef",a.displayedColumns),o.Cb(1),o.lc("matRowDefColumns",a.displayedColumns)}},directives:[i.a,b.a,l.b,l.e,r.b,d.b,d.d,l.g,d.a,m.a,s.k,u.j,u.c,u.e,u.b,u.g,u.i,u.d,u.a,u.f,u.h,c.i],styles:[".tabla-ventas[_ngcontent-%COMP%]{width:100%;margin-top:16px}.row-selected[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.12)}.actions[_ngcontent-%COMP%]{margin-bottom:16px}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-right:8px}@media screen and (max-width:600px){.actions[_ngcontent-%COMP%]{flex-wrap:wrap}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;margin-bottom:8px}}.filter-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-right:8px;margin-bottom:1rem}@media screen and (max-width:600px){.filter-actions[_ngcontent-%COMP%]{flex-wrap:wrap}.filter-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;margin-bottom:8px}}.filters[_ngcontent-%COMP%]{display:flex}.filters[_ngcontent-%COMP%]   .filter-actions[_ngcontent-%COMP%]{margin-left:16px}.filters[_ngcontent-%COMP%]   .filter-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .filters[_ngcontent-%COMP%]   .input-list[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{margin-right:8px}@media screen and (max-width:600px){.filters[_ngcontent-%COMP%]{flex-wrap:wrap}.filters[_ngcontent-%COMP%]   .filter-actions[_ngcontent-%COMP%]{width:100%;margin:0}.filters[_ngcontent-%COMP%]   .filter-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:block;margin:0 0 8px;width:100%;margin-bottom:8px}.filters[_ngcontent-%COMP%]   .input-list[_ngcontent-%COMP%], .filters[_ngcontent-%COMP%]   .input-list[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}}"]}),t})();var z=n("f0Cb");function I(t,a){1&t&&(o.Ub(0,"th",27),o.yc(1,"C\xf3digo"),o.Tb())}function $(t,a){if(1&t&&(o.Ub(0,"td",28),o.yc(1),o.Tb()),2&t){const t=a.$implicit;o.Cb(1),o.zc(t.codigo)}}function F(t,a){1&t&&(o.Ub(0,"th",27),o.yc(1,"Descripci\xf3n"),o.Tb())}function V(t,a){if(1&t&&(o.Ub(0,"td",28),o.yc(1),o.Tb()),2&t){const t=a.$implicit;o.Cb(1),o.zc(t.descripcion)}}function B(t,a){1&t&&(o.Ub(0,"th",27),o.yc(1,"Marca"),o.Tb())}function H(t,a){if(1&t&&(o.Ub(0,"td",28),o.yc(1),o.Tb()),2&t){const t=a.$implicit;o.Cb(1),o.zc(t.marca)}}function j(t,a){1&t&&(o.Ub(0,"th",27),o.yc(1,"Color"),o.Tb())}function N(t,a){if(1&t&&(o.Ub(0,"td",28),o.yc(1),o.Tb()),2&t){const t=a.$implicit;o.Cb(1),o.zc(t.color)}}function E(t,a){1&t&&(o.Ub(0,"th",27),o.yc(1,"Precio Unitario"),o.Tb())}function G(t,a){if(1&t&&(o.Ub(0,"td",28),o.yc(1),o.Tb()),2&t){const t=a.$implicit;o.Cb(1),o.zc(t.punitario)}}function J(t,a){1&t&&(o.Ub(0,"th",27),o.yc(1,"Cantidad"),o.Tb())}function K(t,a){if(1&t&&(o.Ub(0,"td",28),o.yc(1),o.Tb()),2&t){const t=a.$implicit;o.Cb(1),o.zc(t.cantidad)}}function L(t,a){1&t&&(o.Ub(0,"th",27),o.yc(1,"Total"),o.Tb())}function q(t,a){if(1&t&&(o.Ub(0,"td",28),o.yc(1),o.Tb()),2&t){const t=a.$implicit;o.Cb(1),o.zc(t.total)}}function X(t,a){1&t&&o.Pb(0,"tr",29)}const A=function(t){return{"row-selected":t}};function Q(t,a){if(1&t&&o.Pb(0,"tr",30),2&t){const t=a.$implicit,n=o.gc();o.lc("ngClass",o.nc(1,A,n.selectedId===t.codigo))}}const W=[{codigo:"1",descripcion:"lentes",marca:"Ray-Ban",color:"azul",punitario:"S/ 250",cantidad:"1",total:"S/ 250"},{codigo:"1",descripcion:"lentes",marca:"Ray-Ban",color:"azul",punitario:"S/ 250",cantidad:"1",total:"S/ 250"},{codigo:"1",descripcion:"lentes",marca:"Ray-Ban",color:"azul",punitario:"S/ 250",cantidad:"1",total:"S/ 250"},{codigo:"1",descripcion:"lentes",marca:"Ray-Ban",color:"azul",punitario:"S/ 250",cantidad:"1",total:"S/ 250"}];function Y(t,a){1&t&&(o.Ub(0,"th",27),o.yc(1,"C\xf3digo"),o.Tb())}function Z(t,a){if(1&t&&(o.Ub(0,"td",28),o.yc(1),o.Tb()),2&t){const t=a.$implicit;o.Cb(1),o.zc(t.codigo)}}function tt(t,a){1&t&&(o.Ub(0,"th",27),o.yc(1,"Descripci\xf3n"),o.Tb())}function at(t,a){if(1&t&&(o.Ub(0,"td",28),o.yc(1),o.Tb()),2&t){const t=a.$implicit;o.Cb(1),o.zc(t.descripcion)}}function nt(t,a){1&t&&(o.Ub(0,"th",27),o.yc(1,"Marca"),o.Tb())}function ct(t,a){if(1&t&&(o.Ub(0,"td",28),o.yc(1),o.Tb()),2&t){const t=a.$implicit;o.Cb(1),o.zc(t.marca)}}function et(t,a){1&t&&(o.Ub(0,"th",27),o.yc(1,"Color"),o.Tb())}function ot(t,a){if(1&t&&(o.Ub(0,"td",28),o.yc(1),o.Tb()),2&t){const t=a.$implicit;o.Cb(1),o.zc(t.color)}}function it(t,a){1&t&&(o.Ub(0,"th",27),o.yc(1,"Precio Unitario"),o.Tb())}function bt(t,a){if(1&t&&(o.Ub(0,"td",28),o.yc(1),o.Tb()),2&t){const t=a.$implicit;o.Cb(1),o.zc(t.punitario)}}function lt(t,a){1&t&&(o.Ub(0,"th",27),o.yc(1,"Cantidad"),o.Tb())}function rt(t,a){if(1&t&&(o.Ub(0,"td",28),o.yc(1),o.Tb()),2&t){const t=a.$implicit;o.Cb(1),o.zc(t.cantidad)}}function dt(t,a){1&t&&(o.Ub(0,"th",27),o.yc(1,"Total"),o.Tb())}function mt(t,a){if(1&t&&(o.Ub(0,"td",28),o.yc(1),o.Tb()),2&t){const t=a.$implicit;o.Cb(1),o.zc(t.total)}}function st(t,a){1&t&&o.Pb(0,"tr",29)}const ut=function(t){return{"row-selected":t}};function ft(t,a){if(1&t&&o.Pb(0,"tr",30),2&t){const t=a.$implicit,n=o.gc();o.lc("ngClass",o.nc(1,ut,n.selectedId===t.codigo))}}const pt=[{codigo:"1",descripcion:"lentes",marca:"Ray-Ban",color:"azul",punitario:"S/ 250",cantidad:"1",total:"S/ 250"},{codigo:"1",descripcion:"lentes",marca:"Ray-Ban",color:"azul",punitario:"S/ 250",cantidad:"1",total:"S/ 250"},{codigo:"1",descripcion:"lentes",marca:"Ray-Ban",color:"azul",punitario:"S/ 250",cantidad:"1",total:"S/ 250"},{codigo:"1",descripcion:"lentes",marca:"Ray-Ban",color:"azul",punitario:"S/ 250",cantidad:"1",total:"S/ 250"}],gt=[{path:"",component:R},{path:"nuevo",component:(()=>{class t{constructor(t){this.location=t,this.selectedId="",this.displayedColumns=["codigo","descripcion","marca","color","punitario","cantidad","total"],this.dataSource=W}ngOnInit(){}cancel(t){this.location.back()}updateSelected(t){}}return t.\u0275fac=function(a){return new(a||t)(o.Ob(c.g))},t.\u0275cmp=o.Ib({type:t,selectors:[["app-nueva-venta"]],decls:107,vars:7,consts:[[1,"nueva-venta","mat-elevation-z8"],[1,"section-container"],[1,"input-list"],["type","text","matInput",""],["appearance","fill"],["matInput","",3,"matDatepicker"],["matSuffix","",3,"for"],["picker1",""],["picker2",""],["mat-table","",1,"mat-elevation-z8","tabla-venta",3,"dataSource"],["matColumnDef","codigo"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","descripcion"],["matColumnDef","marca"],["matColumnDef","color"],["matColumnDef","punitario"],["matColumnDef","cantidad"],["matColumnDef","total"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"ngClass",4,"matRowDef","matRowDefColumns"],["align","right",1,"row"],[1,"col-lg-12"],[1,"actions"],["mat-flat-button","",3,"click"],["mat-raised-button","","color","warn"],["mat-raised-button","","color","primary"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row","",3,"ngClass"]],template:function(t,a){if(1&t&&(o.Ub(0,"div",0),o.Ub(1,"div",1),o.Ub(2,"h2"),o.yc(3,"Registrar nueva venta"),o.Tb(),o.Ub(4,"div",2),o.Ub(5,"mat-form-field"),o.Ub(6,"mat-label"),o.yc(7,"Documento"),o.Tb(),o.Pb(8,"input",3),o.Tb(),o.Ub(9,"mat-form-field"),o.Ub(10,"mat-label"),o.yc(11,"Nombre Cliente"),o.Tb(),o.Pb(12,"input",3),o.Tb(),o.Ub(13,"mat-form-field",4),o.Ub(14,"mat-label"),o.yc(15,"Fecha de venta"),o.Tb(),o.Pb(16,"input",5),o.Pb(17,"mat-datepicker-toggle",6),o.Pb(18,"mat-datepicker",null,7),o.Tb(),o.Ub(20,"mat-form-field"),o.Ub(21,"mat-label"),o.yc(22,"Direcci\xf3n de entrega"),o.Tb(),o.Pb(23,"input",3),o.Tb(),o.Ub(24,"mat-form-field",4),o.Ub(25,"mat-label"),o.yc(26,"Fecha de despacho"),o.Tb(),o.Pb(27,"input",5),o.Pb(28,"mat-datepicker-toggle",6),o.Pb(29,"mat-datepicker",null,8),o.Tb(),o.Ub(31,"mat-form-field"),o.Ub(32,"mat-label"),o.yc(33,"Canal de venta"),o.Tb(),o.Ub(34,"mat-select"),o.Ub(35,"mat-option"),o.yc(36," Facebook "),o.Tb(),o.Ub(37,"mat-option"),o.yc(38," Instagram "),o.Tb(),o.Tb(),o.Tb(),o.Ub(39,"mat-form-field"),o.Ub(40,"mat-label"),o.yc(41,"Vendedor"),o.Tb(),o.Ub(42,"mat-select"),o.Ub(43,"mat-option"),o.yc(44," Vendedor 1 "),o.Tb(),o.Ub(45,"mat-option"),o.yc(46," Vendedor 2 "),o.Tb(),o.Tb(),o.Tb(),o.Pb(47,"mat-divider"),o.Tb(),o.Ub(48,"div"),o.Ub(49,"h2"),o.yc(50,"Productos"),o.Tb(),o.Ub(51,"div"),o.Ub(52,"table",9),o.Sb(53,10),o.xc(54,I,2,0,"th",11),o.xc(55,$,2,1,"td",12),o.Rb(),o.Sb(56,13),o.xc(57,F,2,0,"th",11),o.xc(58,V,2,1,"td",12),o.Rb(),o.Sb(59,14),o.xc(60,B,2,0,"th",11),o.xc(61,H,2,1,"td",12),o.Rb(),o.Sb(62,15),o.xc(63,j,2,0,"th",11),o.xc(64,N,2,1,"td",12),o.Rb(),o.Sb(65,16),o.xc(66,E,2,0,"th",11),o.xc(67,G,2,1,"td",12),o.Rb(),o.Sb(68,17),o.xc(69,J,2,0,"th",11),o.xc(70,K,2,1,"td",12),o.Rb(),o.Sb(71,18),o.xc(72,L,2,0,"th",11),o.xc(73,q,2,1,"td",12),o.Rb(),o.xc(74,X,1,0,"tr",19),o.xc(75,Q,1,3,"tr",20),o.Tb(),o.Tb(),o.Tb(),o.Pb(76,"mat-divider"),o.Ub(77,"div",21),o.Ub(78,"div",22),o.Ub(79,"mat-form-field"),o.Ub(80,"mat-label"),o.yc(81,"Sub-total"),o.Tb(),o.Pb(82,"input",3),o.Tb(),o.Tb(),o.Tb(),o.Ub(83,"div",21),o.Ub(84,"div",22),o.Ub(85,"mat-form-field"),o.Ub(86,"mat-label"),o.yc(87,"Impuesto"),o.Tb(),o.Pb(88,"input",3),o.Tb(),o.Tb(),o.Tb(),o.Ub(89,"div",21),o.Ub(90,"div",22),o.Ub(91,"mat-form-field"),o.Ub(92,"mat-label"),o.yc(93,"Total"),o.Tb(),o.Pb(94,"input",3),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Pb(95,"mat-divider"),o.Ub(96,"div",23),o.Ub(97,"button",24),o.cc("click",(function(t){return a.cancel(t)})),o.yc(98,"Cancelar"),o.Tb(),o.Ub(99,"button",25),o.Ub(100,"mat-icon"),o.yc(101,"delete"),o.Tb(),o.yc(102,"Borrar"),o.Tb(),o.Ub(103,"button",26),o.Ub(104,"mat-icon"),o.yc(105,"save"),o.Tb(),o.yc(106,"Guardar"),o.Tb(),o.Tb(),o.Tb()),2&t){const t=o.pc(19),n=o.pc(30);o.Cb(16),o.lc("matDatepicker",t),o.Cb(1),o.lc("for",t),o.Cb(10),o.lc("matDatepicker",n),o.Cb(1),o.lc("for",n),o.Cb(24),o.lc("dataSource",a.dataSource),o.Cb(22),o.lc("matHeaderRowDef",a.displayedColumns),o.Cb(1),o.lc("matRowDefColumns",a.displayedColumns)}},directives:[l.b,l.e,r.b,d.b,d.d,l.g,d.a,m.a,s.k,z.a,u.j,u.c,u.e,u.b,u.g,u.i,i.a,b.a,u.d,u.a,u.f,u.h,c.i],styles:[".nueva-venta[_ngcontent-%COMP%]{padding:20px}.tabla-venta[_ngcontent-%COMP%]{width:100%;margin-top:16px}.section-container[_ngcontent-%COMP%]:not(:first-child){padding-top:20px}.section-container[_ngcontent-%COMP%], .totalizado[_ngcontent-%COMP%]{padding-bottom:20px}.totalizado[_ngcontent-%COMP%]{margin-top:5px}.input-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.input-list[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{margin-right:20px;width:300px}.actions[_ngcontent-%COMP%]{padding-top:20px;display:flex;justify-content:flex-end}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:8px}@media screen and (max-width:600px){.actions[_ngcontent-%COMP%]{flex-wrap:wrap}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;margin-top:8px}}"]}),t})()},{path:"editar/:id",component:(()=>{class t{constructor(t){this.location=t,this.selectedId="",this.displayedColumns=["codigo","descripcion","marca","color","punitario","cantidad","total"],this.dataSource=pt}ngOnInit(){}cancel(t){this.location.back()}}return t.\u0275fac=function(a){return new(a||t)(o.Ob(c.g))},t.\u0275cmp=o.Ib({type:t,selectors:[["app-editar-venta"]],decls:107,vars:7,consts:[[1,"editar-venta","mat-elevation-z8"],[1,"section-container"],[1,"input-list"],["type","text","matInput",""],["appearance","fill"],["matInput","",3,"matDatepicker"],["matSuffix","",3,"for"],["picker1",""],["picker2",""],["mat-table","",1,"mat-elevation-z8","tabla-venta",3,"dataSource"],["matColumnDef","codigo"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","descripcion"],["matColumnDef","marca"],["matColumnDef","color"],["matColumnDef","punitario"],["matColumnDef","cantidad"],["matColumnDef","total"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"ngClass",4,"matRowDef","matRowDefColumns"],["align","right",1,"row"],[1,"col-lg-12"],[1,"actions"],["mat-flat-button","",3,"click"],["mat-raised-button","","color","warn"],["mat-raised-button","","color","primary"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row","",3,"ngClass"]],template:function(t,a){if(1&t&&(o.Ub(0,"div",0),o.Ub(1,"div",1),o.Ub(2,"h2"),o.yc(3,"Editar venta"),o.Tb(),o.Ub(4,"div",2),o.Ub(5,"mat-form-field"),o.Ub(6,"mat-label"),o.yc(7,"Documento"),o.Tb(),o.Pb(8,"input",3),o.Tb(),o.Ub(9,"mat-form-field"),o.Ub(10,"mat-label"),o.yc(11,"Nombre Cliente"),o.Tb(),o.Pb(12,"input",3),o.Tb(),o.Ub(13,"mat-form-field",4),o.Ub(14,"mat-label"),o.yc(15,"Fecha de venta"),o.Tb(),o.Pb(16,"input",5),o.Pb(17,"mat-datepicker-toggle",6),o.Pb(18,"mat-datepicker",null,7),o.Tb(),o.Ub(20,"mat-form-field"),o.Ub(21,"mat-label"),o.yc(22,"Direcci\xf3n de entrega"),o.Tb(),o.Pb(23,"input",3),o.Tb(),o.Ub(24,"mat-form-field",4),o.Ub(25,"mat-label"),o.yc(26,"Fecha de despacho"),o.Tb(),o.Pb(27,"input",5),o.Pb(28,"mat-datepicker-toggle",6),o.Pb(29,"mat-datepicker",null,8),o.Tb(),o.Ub(31,"mat-form-field"),o.Ub(32,"mat-label"),o.yc(33,"Canal de venta"),o.Tb(),o.Ub(34,"mat-select"),o.Ub(35,"mat-option"),o.yc(36," Facebook "),o.Tb(),o.Ub(37,"mat-option"),o.yc(38," Instagram "),o.Tb(),o.Tb(),o.Tb(),o.Ub(39,"mat-form-field"),o.Ub(40,"mat-label"),o.yc(41,"Vendedor"),o.Tb(),o.Ub(42,"mat-select"),o.Ub(43,"mat-option"),o.yc(44," Vendedor 1 "),o.Tb(),o.Ub(45,"mat-option"),o.yc(46," Vendedor 2 "),o.Tb(),o.Tb(),o.Tb(),o.Pb(47,"mat-divider"),o.Tb(),o.Ub(48,"div"),o.Ub(49,"h2"),o.yc(50,"Productos"),o.Tb(),o.Ub(51,"div"),o.Ub(52,"table",9),o.Sb(53,10),o.xc(54,Y,2,0,"th",11),o.xc(55,Z,2,1,"td",12),o.Rb(),o.Sb(56,13),o.xc(57,tt,2,0,"th",11),o.xc(58,at,2,1,"td",12),o.Rb(),o.Sb(59,14),o.xc(60,nt,2,0,"th",11),o.xc(61,ct,2,1,"td",12),o.Rb(),o.Sb(62,15),o.xc(63,et,2,0,"th",11),o.xc(64,ot,2,1,"td",12),o.Rb(),o.Sb(65,16),o.xc(66,it,2,0,"th",11),o.xc(67,bt,2,1,"td",12),o.Rb(),o.Sb(68,17),o.xc(69,lt,2,0,"th",11),o.xc(70,rt,2,1,"td",12),o.Rb(),o.Sb(71,18),o.xc(72,dt,2,0,"th",11),o.xc(73,mt,2,1,"td",12),o.Rb(),o.xc(74,st,1,0,"tr",19),o.xc(75,ft,1,3,"tr",20),o.Tb(),o.Tb(),o.Tb(),o.Pb(76,"mat-divider"),o.Ub(77,"div",21),o.Ub(78,"div",22),o.Ub(79,"mat-form-field"),o.Ub(80,"mat-label"),o.yc(81,"Sub-total"),o.Tb(),o.Pb(82,"input",3),o.Tb(),o.Tb(),o.Tb(),o.Ub(83,"div",21),o.Ub(84,"div",22),o.Ub(85,"mat-form-field"),o.Ub(86,"mat-label"),o.yc(87,"Impuesto"),o.Tb(),o.Pb(88,"input",3),o.Tb(),o.Tb(),o.Tb(),o.Ub(89,"div",21),o.Ub(90,"div",22),o.Ub(91,"mat-form-field"),o.Ub(92,"mat-label"),o.yc(93,"Total"),o.Tb(),o.Pb(94,"input",3),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Pb(95,"mat-divider"),o.Ub(96,"div",23),o.Ub(97,"button",24),o.cc("click",(function(t){return a.cancel(t)})),o.yc(98,"Cancelar"),o.Tb(),o.Ub(99,"button",25),o.Ub(100,"mat-icon"),o.yc(101,"delete"),o.Tb(),o.yc(102,"Borrar"),o.Tb(),o.Ub(103,"button",26),o.Ub(104,"mat-icon"),o.yc(105,"save"),o.Tb(),o.yc(106,"Guardar"),o.Tb(),o.Tb(),o.Tb()),2&t){const t=o.pc(19),n=o.pc(30);o.Cb(16),o.lc("matDatepicker",t),o.Cb(1),o.lc("for",t),o.Cb(10),o.lc("matDatepicker",n),o.Cb(1),o.lc("for",n),o.Cb(24),o.lc("dataSource",a.dataSource),o.Cb(22),o.lc("matHeaderRowDef",a.displayedColumns),o.Cb(1),o.lc("matRowDefColumns",a.displayedColumns)}},directives:[l.b,l.e,r.b,d.b,d.d,l.g,d.a,m.a,s.k,z.a,u.j,u.c,u.e,u.b,u.g,u.i,i.a,b.a,u.d,u.a,u.f,u.h,c.i],styles:[".editar-venta[_ngcontent-%COMP%]{padding:20px}.tabla-venta[_ngcontent-%COMP%]{width:100%;margin-top:16px}.section-container[_ngcontent-%COMP%]:not(:first-child){padding-top:20px}.section-container[_ngcontent-%COMP%]{padding-bottom:20px}.input-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.input-list[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{margin-right:20px;width:300px}.actions[_ngcontent-%COMP%]{padding-top:20px;display:flex;justify-content:flex-end}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:8px}@media screen and (max-width:600px){.actions[_ngcontent-%COMP%]{flex-wrap:wrap}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;margin-top:8px}}"]}),t})()}];let Tt=(()=>{class t{}return t.\u0275mod=o.Mb({type:t}),t.\u0275inj=o.Lb({factory:function(a){return new(a||t)},imports:[[e.d.forChild(gt)],e.d]}),t})();var Ct=n("hctd");n.d(a,"VentasModule",(function(){return Ut}));let Ut=(()=>{class t{}return t.\u0275mod=o.Mb({type:t}),t.\u0275inj=o.Lb({factory:function(a){return new(a||t)},imports:[[c.c,Tt,Ct.a]]}),t})()}}]);
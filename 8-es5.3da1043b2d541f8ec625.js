function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,n,e){return n&&_defineProperties(t.prototype,n),e&&_defineProperties(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{xSpW:function(t,n,e){"use strict";e.r(n);var i=e("ofXK"),o=e("tyNb"),a=e("fXoL"),c=e("bTqV"),b=e("NFeN"),r=e("kmnG"),l=e("qFsG"),d=e("d3UM"),m=e("FKr1"),p=e("+0xr"),s=e("M9IT");function u(t,n){1&t&&(a.Ub(0,"th",22),a.yc(1,"C\xf3digo"),a.Tb())}function f(t,n){if(1&t&&(a.Ub(0,"td",23),a.yc(1),a.Tb()),2&t){var e=n.$implicit;a.Cb(1),a.zc(e.codigo)}}function g(t,n){1&t&&(a.Ub(0,"th",22),a.yc(1,"Descripci\xf3n"),a.Tb())}function T(t,n){if(1&t&&(a.Ub(0,"td",23),a.yc(1),a.Tb()),2&t){var e=n.$implicit;a.Cb(1),a.zc(e.descripcion)}}function U(t,n){1&t&&(a.Ub(0,"th",22),a.yc(1,"Tipo"),a.Tb())}function y(t,n){if(1&t&&(a.Ub(0,"td",23),a.yc(1),a.Tb()),2&t){var e=n.$implicit;a.Cb(1),a.zc(e.tipo)}}function C(t,n){1&t&&(a.Ub(0,"th",22),a.yc(1,"Marca"),a.Tb())}function P(t,n){if(1&t&&(a.Ub(0,"td",23),a.yc(1),a.Tb()),2&t){var e=n.$implicit;a.Cb(1),a.zc(e.marca)}}function h(t,n){1&t&&(a.Ub(0,"th",22),a.yc(1,"Stock"),a.Tb())}function v(t,n){if(1&t&&(a.Ub(0,"td",23),a.yc(1),a.Tb()),2&t){var e=n.$implicit;a.Cb(1),a.zc(e.stock)}}function x(t,n){1&t&&a.Pb(0,"tr",24)}var _=function(t){return{"row-selected":t}};function O(t,n){if(1&t){var e=a.Vb();a.Ub(0,"tr",25),a.cc("click",(function(){a.rc(e);var t=n.$implicit;return a.gc().updateSelected(t)})),a.Tb()}if(2&t){var i=n.$implicit,o=a.gc();a.lc("ngClass",a.nc(1,_,o.selectedId===i.codigo))}}var M,w,k,S,I=function(){return[5,10,25,100]},D=[{codigo:"1",descripcion:"test",marca:"test",stock:10,tipo:"test"},{codigo:"2",descripcion:"test",marca:"test",stock:10,tipo:"test"},{codigo:"3",descripcion:"test",marca:"test",stock:10,tipo:"test"},{codigo:"4",descripcion:"test",marca:"test",stock:10,tipo:"test"},{codigo:"5",descripcion:"test",marca:"test",stock:10,tipo:"test"}],R=((M=function(){function t(n,e){_classCallCheck(this,t),this.router=n,this.route=e,this.selectedId="",this.displayedColumns=["codigo","descripcion","tipo","marca","stock"],this.dataSource=D}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"nuevoProducto",value:function(t){this.router.navigate(["nuevo"],{relativeTo:this.route})}},{key:"modificarProducto",value:function(t){this.router.navigate(["editar",this.selectedId],{relativeTo:this.route})}},{key:"updateSelected",value:function(t){this.selectedId=this.selectedId===t.codigo?"":t.codigo}}]),t}()).\u0275fac=function(t){return new(t||M)(a.Ob(o.b),a.Ob(o.a))},M.\u0275cmp=a.Ib({type:M,selectors:[["app-main"]],decls:64,vars:9,consts:[[1,"actions"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","color","accent",3,"disabled","click"],["mat-raised-button","","color","warn",3,"disabled"],[1,"filters"],[1,"input-list"],["type","text","matInput",""],[1,"filter-actions"],["mat-raised-button","","color","primary"],["mat-raised-button","","color","warn"],[1,"table-wrapper"],["mat-table","",1,"mat-elevation-z8","tabla-productos",3,"dataSource"],["matColumnDef","codigo"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","descripcion"],["matColumnDef","tipo"],["matColumnDef","marca"],["matColumnDef","stock"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"ngClass","click",4,"matRowDef","matRowDefColumns"],[3,"length","pageSize","pageSizeOptions"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row","",3,"ngClass","click"]],template:function(t,n){1&t&&(a.Ub(0,"div",0),a.Ub(1,"button",1),a.cc("click",(function(t){return n.nuevoProducto(t)})),a.Ub(2,"mat-icon"),a.yc(3,"\nadd_circle_outline"),a.Tb(),a.yc(4," Nuevo Producto "),a.Tb(),a.Ub(5,"button",2),a.cc("click",(function(t){return n.modificarProducto(t)})),a.Ub(6,"mat-icon"),a.yc(7," update"),a.Tb(),a.yc(8," Modificar Producto "),a.Tb(),a.Ub(9,"button",3),a.Ub(10,"mat-icon"),a.yc(11," delete"),a.Tb(),a.yc(12," Eliminar Producto "),a.Tb(),a.Tb(),a.Ub(13,"div"),a.yc(14,"Filtar Clientes:"),a.Tb(),a.Ub(15,"div",4),a.Ub(16,"div",5),a.Ub(17,"mat-form-field"),a.Ub(18,"mat-label"),a.yc(19,"C\xf3digo Producto"),a.Tb(),a.Pb(20,"input",6),a.Tb(),a.Ub(21,"mat-form-field"),a.Ub(22,"mat-label"),a.yc(23,"Descripci\xf3n Producto"),a.Tb(),a.Pb(24,"input",6),a.Tb(),a.Ub(25,"mat-form-field"),a.Ub(26,"mat-label"),a.yc(27,"Tipo"),a.Tb(),a.Ub(28,"mat-select"),a.Ub(29,"mat-option"),a.yc(30," Activo "),a.Tb(),a.Ub(31,"mat-option"),a.yc(32," Inactivo "),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Ub(33,"div",7),a.Ub(34,"button",8),a.Ub(35,"mat-icon"),a.yc(36,"search"),a.Tb(),a.yc(37,"Filtrar"),a.Tb(),a.Ub(38,"button",9),a.Ub(39,"mat-icon"),a.yc(40,"clear"),a.Tb(),a.yc(41,"Borrar"),a.Tb(),a.Tb(),a.Tb(),a.Ub(42,"div"),a.yc(43,"Principales productos:"),a.Tb(),a.Ub(44,"div",10),a.Ub(45,"table",11),a.Sb(46,12),a.xc(47,u,2,0,"th",13),a.xc(48,f,2,1,"td",14),a.Rb(),a.Sb(49,15),a.xc(50,g,2,0,"th",13),a.xc(51,T,2,1,"td",14),a.Rb(),a.Sb(52,16),a.xc(53,U,2,0,"th",13),a.xc(54,y,2,1,"td",14),a.Rb(),a.Sb(55,17),a.xc(56,C,2,0,"th",13),a.xc(57,P,2,1,"td",14),a.Rb(),a.Sb(58,18),a.xc(59,h,2,0,"th",13),a.xc(60,v,2,1,"td",14),a.Rb(),a.xc(61,x,1,0,"tr",19),a.xc(62,O,1,3,"tr",20),a.Tb(),a.Tb(),a.Pb(63,"mat-paginator",21)),2&t&&(a.Cb(5),a.lc("disabled",!n.selectedId),a.Cb(4),a.lc("disabled",!n.selectedId),a.Cb(36),a.lc("dataSource",n.dataSource),a.Cb(16),a.lc("matHeaderRowDef",n.displayedColumns),a.Cb(1),a.lc("matRowDefColumns",n.displayedColumns),a.Cb(1),a.lc("length",100)("pageSize",10)("pageSizeOptions",a.mc(8,I)))},directives:[c.a,b.a,r.b,r.e,l.b,d.a,m.k,p.j,p.c,p.e,p.b,p.g,p.i,s.a,p.d,p.a,p.f,p.h,i.i],styles:[".tabla-productos[_ngcontent-%COMP%]{min-width:700px;width:100%;margin-top:16px}.table-wrapper[_ngcontent-%COMP%]{overflow-x:auto}.row-selected[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.12)}.actions[_ngcontent-%COMP%]{margin-bottom:16px}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-right:8px}@media screen and (max-width:600px){.actions[_ngcontent-%COMP%]{flex-wrap:wrap}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;margin-bottom:8px}}.filters[_ngcontent-%COMP%]{display:flex}.filters[_ngcontent-%COMP%]   .filter-actions[_ngcontent-%COMP%]{margin-left:16px;display:flex;align-items:center}.filters[_ngcontent-%COMP%]   .filter-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .filters[_ngcontent-%COMP%]   .input-list[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{margin-right:8px}@media screen and (max-width:600px){.filters[_ngcontent-%COMP%]{flex-wrap:wrap}.filters[_ngcontent-%COMP%]   .filter-actions[_ngcontent-%COMP%]{width:100%;margin:0;display:block}.filters[_ngcontent-%COMP%]   .filter-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:block;width:100%;margin:0 0 8px}.filters[_ngcontent-%COMP%]   .input-list[_ngcontent-%COMP%], .filters[_ngcontent-%COMP%]   .input-list[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}}"]}),M),z=e("f0Cb"),A=[{path:"",component:R},{path:"nuevo",component:(k=function(){function t(n){_classCallCheck(this,t),this.location=n}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"cancel",value:function(t){this.location.back()}}]),t}(),k.\u0275fac=function(t){return new(t||k)(a.Ob(i.g))},k.\u0275cmp=a.Ib({type:k,selectors:[["app-nuevo-producto"]],decls:97,vars:0,consts:[[1,"nuevo-producto","mat-elevation-z8"],[1,"section-container"],[1,"input-list"],["type","text","matInput",""],["value","1"],["value","2"],["matInput","","type","number","min","0"],["matInput","","type","number"],["matPrefix",""],[1,"image-control"],[1,"image-container"],["mat-stroked-button","","color","primary"],[1,"upload-text"],[1,"actions"],["mat-flat-button","",3,"click"],["mat-raised-button","","color","primary"]],template:function(t,n){1&t&&(a.Ub(0,"h1"),a.yc(1,"Registrar Producto"),a.Tb(),a.Ub(2,"div",0),a.Ub(3,"div",1),a.Ub(4,"h2"),a.yc(5,"Datos de producto"),a.Tb(),a.Ub(6,"div",2),a.Ub(7,"mat-form-field"),a.Ub(8,"mat-label"),a.yc(9,"C\xf3digo"),a.Tb(),a.Pb(10,"input",3),a.Tb(),a.Ub(11,"mat-form-field"),a.Ub(12,"mat-label"),a.yc(13,"C\xf3digo de Fabrica"),a.Tb(),a.Pb(14,"input",3),a.Tb(),a.Ub(15,"mat-form-field"),a.Ub(16,"mat-label"),a.yc(17,"C\xf3digo Sunat"),a.Tb(),a.Pb(18,"input",3),a.Tb(),a.Ub(19,"mat-form-field"),a.Ub(20,"mat-label"),a.yc(21,"Descripci\xf3n"),a.Tb(),a.Pb(22,"input",3),a.Tb(),a.Ub(23,"mat-form-field"),a.Ub(24,"mat-label"),a.yc(25,"Tipo"),a.Tb(),a.Ub(26,"mat-select"),a.Ub(27,"mat-option",4),a.yc(28," Activo "),a.Tb(),a.Ub(29,"mat-option",5),a.yc(30," Inactivo "),a.Tb(),a.Tb(),a.Tb(),a.Ub(31,"mat-form-field"),a.Ub(32,"mat-label"),a.yc(33,"Correo"),a.Tb(),a.Pb(34,"input",3),a.Tb(),a.Ub(35,"mat-form-field"),a.Ub(36,"mat-label"),a.yc(37,"Descripci\xf3n abreviada"),a.Tb(),a.Pb(38,"input",3),a.Tb(),a.Ub(39,"mat-form-field"),a.Ub(40,"mat-label"),a.yc(41,"Marca"),a.Tb(),a.Ub(42,"mat-select"),a.Ub(43,"mat-option",4),a.yc(44," Activo "),a.Tb(),a.Ub(45,"mat-option",5),a.yc(46," Inactivo "),a.Tb(),a.Tb(),a.Tb(),a.Ub(47,"mat-form-field"),a.Ub(48,"mat-label"),a.yc(49,"Enlace RRSS 2"),a.Tb(),a.Pb(50,"input",3),a.Tb(),a.Ub(51,"mat-form-field"),a.Ub(52,"mat-label"),a.yc(53,"Enlace RRSS 1"),a.Tb(),a.Pb(54,"input",3),a.Tb(),a.Tb(),a.Tb(),a.Pb(55,"mat-divider"),a.Ub(56,"div",1),a.Ub(57,"h2"),a.yc(58,"Stock"),a.Tb(),a.Ub(59,"div",2),a.Ub(60,"mat-form-field"),a.Ub(61,"mat-label"),a.yc(62,"Unidad de venta"),a.Tb(),a.Ub(63,"mat-select"),a.Ub(64,"mat-option",4),a.yc(65," Activo "),a.Tb(),a.Ub(66,"mat-option",5),a.yc(67," Inactivo "),a.Tb(),a.Tb(),a.Tb(),a.Ub(68,"mat-form-field"),a.Ub(69,"mat-label"),a.yc(70,"Stock actual"),a.Tb(),a.Pb(71,"input",6),a.Tb(),a.Ub(72,"mat-form-field"),a.Ub(73,"mat-label"),a.yc(74,"Precio Actual"),a.Tb(),a.Pb(75,"input",7),a.Ub(76,"span",8),a.yc(77,"S/"),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Pb(78,"mat-divider"),a.Ub(79,"div",1),a.Ub(80,"h2"),a.yc(81,"Imagen"),a.Tb(),a.Ub(82,"div",9),a.Pb(83,"div",10),a.Ub(84,"button",11),a.Ub(85,"span",12),a.yc(86,"Upload image"),a.Tb(),a.Ub(87,"mat-icon"),a.yc(88,"cloud_upload"),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Pb(89,"mat-divider"),a.Ub(90,"div",13),a.Ub(91,"button",14),a.cc("click",(function(t){return n.cancel(t)})),a.yc(92,"Cancelar"),a.Tb(),a.Ub(93,"button",15),a.yc(94,"Borrar"),a.Tb(),a.Ub(95,"button",15),a.yc(96,"Guardar"),a.Tb(),a.Tb(),a.Tb())},directives:[r.b,r.e,l.b,d.a,m.k,z.a,r.f,c.a,b.a],styles:[".nuevo-producto[_ngcontent-%COMP%]{padding:20px}.section-container[_ngcontent-%COMP%]:not(:first-child){padding-top:20px}.section-container[_ngcontent-%COMP%]{padding-bottom:20px}.input-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.input-list[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{margin-right:20px;width:300px}.actions[_ngcontent-%COMP%]{padding-top:20px;display:flex;justify-content:flex-end}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:8px}@media screen and (max-width:600px){.actions[_ngcontent-%COMP%]{flex-wrap:wrap}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;margin-top:8px}}.upload-text[_ngcontent-%COMP%]{margin-right:4px}.image-control[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:flex-start}.image-control[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]{width:200px;height:150px;background:grey;margin-right:8px}@media screen and (max-width:600px){.image-control[_ngcontent-%COMP%]{display:block}.image-control[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;margin-top:16px}.image-control[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]{width:100%;height:150px;margin-right:0}}"]}),k)},{path:"editar/:id",component:(w=function(){function t(n){_classCallCheck(this,t),this.location=n}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"cancel",value:function(t){this.location.back()}}]),t}(),w.\u0275fac=function(t){return new(t||w)(a.Ob(i.g))},w.\u0275cmp=a.Ib({type:w,selectors:[["app-editar-producto"]],decls:97,vars:0,consts:[[1,"nuevo-producto","mat-elevation-z8"],[1,"section-container"],[1,"input-list"],["type","text","matInput",""],["value","1"],["value","2"],["matInput","","type","number","min","0"],["matInput","","type","number"],["matPrefix",""],[1,"image-control"],[1,"image-container"],["mat-stroked-button","","color","primary"],[1,"upload-text"],[1,"actions"],["mat-flat-button","",3,"click"],["mat-raised-button","","color","primary"]],template:function(t,n){1&t&&(a.Ub(0,"h1"),a.yc(1,"Editar Producto"),a.Tb(),a.Ub(2,"div",0),a.Ub(3,"div",1),a.Ub(4,"h2"),a.yc(5,"Datos de producto"),a.Tb(),a.Ub(6,"div",2),a.Ub(7,"mat-form-field"),a.Ub(8,"mat-label"),a.yc(9,"C\xf3digo"),a.Tb(),a.Pb(10,"input",3),a.Tb(),a.Ub(11,"mat-form-field"),a.Ub(12,"mat-label"),a.yc(13,"C\xf3digo de Fabrica"),a.Tb(),a.Pb(14,"input",3),a.Tb(),a.Ub(15,"mat-form-field"),a.Ub(16,"mat-label"),a.yc(17,"C\xf3digo Sunat"),a.Tb(),a.Pb(18,"input",3),a.Tb(),a.Ub(19,"mat-form-field"),a.Ub(20,"mat-label"),a.yc(21,"Descripci\xf3n"),a.Tb(),a.Pb(22,"input",3),a.Tb(),a.Ub(23,"mat-form-field"),a.Ub(24,"mat-label"),a.yc(25,"Tipo"),a.Tb(),a.Ub(26,"mat-select"),a.Ub(27,"mat-option",4),a.yc(28," Activo "),a.Tb(),a.Ub(29,"mat-option",5),a.yc(30," Inactivo "),a.Tb(),a.Tb(),a.Tb(),a.Ub(31,"mat-form-field"),a.Ub(32,"mat-label"),a.yc(33,"Correo"),a.Tb(),a.Pb(34,"input",3),a.Tb(),a.Ub(35,"mat-form-field"),a.Ub(36,"mat-label"),a.yc(37,"Descripci\xf3n abreviada"),a.Tb(),a.Pb(38,"input",3),a.Tb(),a.Ub(39,"mat-form-field"),a.Ub(40,"mat-label"),a.yc(41,"Marca"),a.Tb(),a.Ub(42,"mat-select"),a.Ub(43,"mat-option",4),a.yc(44," Activo "),a.Tb(),a.Ub(45,"mat-option",5),a.yc(46," Inactivo "),a.Tb(),a.Tb(),a.Tb(),a.Ub(47,"mat-form-field"),a.Ub(48,"mat-label"),a.yc(49,"Enlace RRSS 2"),a.Tb(),a.Pb(50,"input",3),a.Tb(),a.Ub(51,"mat-form-field"),a.Ub(52,"mat-label"),a.yc(53,"Enlace RRSS 1"),a.Tb(),a.Pb(54,"input",3),a.Tb(),a.Tb(),a.Tb(),a.Pb(55,"mat-divider"),a.Ub(56,"div",1),a.Ub(57,"h2"),a.yc(58,"Stock"),a.Tb(),a.Ub(59,"div",2),a.Ub(60,"mat-form-field"),a.Ub(61,"mat-label"),a.yc(62,"Unidad de venta"),a.Tb(),a.Ub(63,"mat-select"),a.Ub(64,"mat-option",4),a.yc(65," Activo "),a.Tb(),a.Ub(66,"mat-option",5),a.yc(67," Inactivo "),a.Tb(),a.Tb(),a.Tb(),a.Ub(68,"mat-form-field"),a.Ub(69,"mat-label"),a.yc(70,"Stock actual"),a.Tb(),a.Pb(71,"input",6),a.Tb(),a.Ub(72,"mat-form-field"),a.Ub(73,"mat-label"),a.yc(74,"Precio Actual"),a.Tb(),a.Pb(75,"input",7),a.Ub(76,"span",8),a.yc(77,"S/"),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Pb(78,"mat-divider"),a.Ub(79,"div",1),a.Ub(80,"h2"),a.yc(81,"Imagen"),a.Tb(),a.Ub(82,"div",9),a.Pb(83,"div",10),a.Ub(84,"button",11),a.Ub(85,"span",12),a.yc(86,"Upload image"),a.Tb(),a.Ub(87,"mat-icon"),a.yc(88,"cloud_upload"),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Pb(89,"mat-divider"),a.Ub(90,"div",13),a.Ub(91,"button",14),a.cc("click",(function(t){return n.cancel(t)})),a.yc(92,"Cancelar"),a.Tb(),a.Ub(93,"button",15),a.yc(94,"Borrar"),a.Tb(),a.Ub(95,"button",15),a.yc(96,"Guardar"),a.Tb(),a.Tb(),a.Tb())},directives:[r.b,r.e,l.b,d.a,m.k,z.a,r.f,c.a,b.a],styles:[".nuevo-producto[_ngcontent-%COMP%]{padding:20px}.section-container[_ngcontent-%COMP%]:not(:first-child){padding-top:20px}.section-container[_ngcontent-%COMP%]{padding-bottom:20px}.input-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.input-list[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{margin-right:20px;width:300px}.actions[_ngcontent-%COMP%]{padding-top:20px;display:flex;justify-content:flex-end}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:8px}@media screen and (max-width:600px){.actions[_ngcontent-%COMP%]{flex-wrap:wrap}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;margin-top:8px}}.upload-text[_ngcontent-%COMP%]{margin-right:4px}.image-control[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:flex-start}.image-control[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]{width:200px;height:150px;background:grey;margin-right:8px}@media screen and (max-width:600px){.image-control[_ngcontent-%COMP%]{display:block}.image-control[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;margin-top:16px}.image-control[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]{width:100%;height:150px;margin-right:0}}"]}),w)}],j=((S=function t(){_classCallCheck(this,t)}).\u0275mod=a.Mb({type:S}),S.\u0275inj=a.Lb({factory:function(t){return new(t||S)},imports:[[o.d.forChild(A)],o.d]}),S),E=e("hctd");e.d(n,"InventarioModule",(function(){return $}));var F,$=((F=function t(){_classCallCheck(this,t)}).\u0275mod=a.Mb({type:F}),F.\u0275inj=a.Lb({factory:function(t){return new(t||F)},imports:[[i.c,j,E.a]]}),F)}}]);
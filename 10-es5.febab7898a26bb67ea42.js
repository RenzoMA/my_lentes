function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,a){return e&&_defineProperties(t.prototype,e),a&&_defineProperties(t,a),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{isUK:function(t,e,a){"use strict";a.r(e);var n=a("ofXK"),c=a("tyNb"),i=a("fXoL"),o=a("bTqV"),l=a("kmnG"),b=a("qFsG"),r=a("iadO"),d=a("d3UM"),m=a("FKr1"),u=a("+0xr");function f(t,e){1&t&&(i.Ub(0,"th",26),i.yc(1,"C\xf3digo"),i.Tb())}function s(t,e){if(1&t&&(i.Ub(0,"td",27),i.yc(1),i.Tb()),2&t){var a=e.$implicit;i.Cb(1),i.zc(a.codigo)}}function p(t,e){1&t&&(i.Ub(0,"th",26),i.yc(1,"Cliente"),i.Tb())}function C(t,e){if(1&t&&(i.Ub(0,"td",27),i.yc(1),i.Tb()),2&t){var a=e.$implicit;i.Cb(1),i.zc(a.cliente)}}function g(t,e){1&t&&(i.Ub(0,"th",26),i.yc(1,"Documento"),i.Tb())}function y(t,e){if(1&t&&(i.Ub(0,"td",27),i.yc(1),i.Tb()),2&t){var a=e.$implicit;i.Cb(1),i.zc(a.documento)}}function T(t,e){1&t&&(i.Ub(0,"th",26),i.yc(1,"Fecha Venta"),i.Tb())}function U(t,e){if(1&t&&(i.Ub(0,"td",27),i.yc(1),i.Tb()),2&t){var a=e.$implicit;i.Cb(1),i.zc(a.fventa)}}function h(t,e){1&t&&(i.Ub(0,"th",26),i.yc(1,"Total"),i.Tb())}function v(t,e){if(1&t&&(i.Ub(0,"td",27),i.yc(1),i.Tb()),2&t){var a=e.$implicit;i.Cb(1),i.zc(a.total)}}function P(t,e){1&t&&(i.Ub(0,"th",26),i.yc(1,"Estado"),i.Tb())}function x(t,e){if(1&t&&(i.Ub(0,"td",27),i.yc(1),i.Tb()),2&t){var a=e.$implicit;i.Cb(1),i.zc(a.estado)}}function k(t,e){1&t&&(i.Ub(0,"th",26),i.yc(1,"Canal"),i.Tb())}function w(t,e){if(1&t&&(i.Ub(0,"td",27),i.yc(1),i.Tb()),2&t){var a=e.$implicit;i.Cb(1),i.zc(a.canal)}}function _(t,e){1&t&&i.Pb(0,"tr",28)}var O=function(t){return{"row-selected":t}};function M(t,e){if(1&t){var a=i.Vb();i.Ub(0,"tr",29),i.cc("click",(function(){i.rc(a);var t=e.$implicit;return i.gc().updateSelected(t)})),i.Tb()}if(2&t){var n=e.$implicit,c=i.gc();i.lc("ngClass",i.nc(1,O,c.selectedId===n.codigo))}}var D,S=[{codigo:"1",cliente:"Victor Morillo",documento:"12345678",fventa:"2020/12/05",total:"category",estado:"Entregado",canal:"Facebook"},{codigo:"2",cliente:"Juan Perez",documento:"12345678",fventa:"2020/12/05",total:"category",estado:"Entregado",canal:"Facebook"},{codigo:"3",cliente:"Carlos Sanchez",documento:"12345678",fventa:"2020/12/05",total:"category",estado:"Compra",canal:"Facebook"},{codigo:"4",cliente:"Johana Gutierrez",documento:"12345678",fventa:"2020/12/05",total:"category",estado:"Compra",canal:"Facebook"},{codigo:"5",cliente:"Jorge Valladares",documento:"12345678",fventa:"2020/12/05",total:"category",estado:"Compra",canal:"Facebook"}],R=((D=function(){function t(e,a){_classCallCheck(this,t),this.router=e,this.route=a,this.selectedId="",this.displayedColumns=["codigo","cliente","documento","fventa","total","estado","canal"],this.dataSource=S}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"nuevaVenta",value:function(t){this.router.navigate(["nuevo"],{relativeTo:this.route})}},{key:"updateSelected",value:function(t){this.selectedId=this.selectedId===t.codigo?"":t.codigo}},{key:"modificarVenta",value:function(t){this.router.navigate(["editar",this.selectedId],{relativeTo:this.route})}}]),t}()).\u0275fac=function(t){return new(t||D)(i.Ob(c.b),i.Ob(c.a))},D.\u0275cmp=i.Ib({type:D,selectors:[["app-main"]],decls:81,vars:9,consts:[[1,"actions"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","color","primary",3,"disabled","click"],["mat-raised-button","","color","primary",3,"disabled"],[1,"filters"],[1,"input-list"],["type","text","matInput",""],["appearance","fill"],["matInput","",3,"matDatepicker"],["matSuffix","",3,"for"],["picker1",""],["picker2",""],[1,"filter-actions"],["mat-raised-button","","color","primary"],["mat-table","",1,"mat-elevation-z8","tabla-ventas",3,"dataSource"],["matColumnDef","codigo"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","cliente"],["matColumnDef","documento"],["matColumnDef","fventa"],["matColumnDef","total"],["matColumnDef","estado"],["matColumnDef","canal"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"ngClass","click",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row","",3,"ngClass","click"]],template:function(t,e){if(1&t&&(i.Ub(0,"div",0),i.Ub(1,"button",1),i.cc("click",(function(t){return e.nuevaVenta(t)})),i.yc(2,"Nueva Venta"),i.Tb(),i.Ub(3,"button",2),i.cc("click",(function(t){return e.modificarVenta(t)})),i.yc(4,"Modificar Venta"),i.Tb(),i.Ub(5,"button",3),i.yc(6,"Anular Venta"),i.Tb(),i.Tb(),i.Ub(7,"div"),i.yc(8,"Filtrar Ventas:"),i.Tb(),i.Ub(9,"div",4),i.Ub(10,"div",5),i.Ub(11,"mat-form-field"),i.Ub(12,"mat-label"),i.yc(13,"Nombre cliente"),i.Tb(),i.Pb(14,"input",6),i.Tb(),i.Ub(15,"mat-form-field"),i.Ub(16,"mat-label"),i.yc(17,"Documento"),i.Tb(),i.Pb(18,"input",6),i.Tb(),i.Ub(19,"mat-form-field",7),i.Ub(20,"mat-label"),i.yc(21,"Fecha desde"),i.Tb(),i.Pb(22,"input",8),i.Pb(23,"mat-datepicker-toggle",9),i.Pb(24,"mat-datepicker",null,10),i.Tb(),i.Ub(26,"mat-form-field",7),i.Ub(27,"mat-label"),i.yc(28,"Fecha hasta"),i.Tb(),i.Pb(29,"input",8),i.Pb(30,"mat-datepicker-toggle",9),i.Pb(31,"mat-datepicker",null,11),i.Tb(),i.Ub(33,"mat-form-field"),i.Ub(34,"mat-label"),i.yc(35,"Estado"),i.Tb(),i.Ub(36,"mat-select"),i.Ub(37,"mat-option"),i.yc(38," Pagado "),i.Tb(),i.Ub(39,"mat-option"),i.yc(40," Entregado "),i.Tb(),i.Tb(),i.Tb(),i.Ub(41,"mat-form-field"),i.Ub(42,"mat-label"),i.yc(43,"Canal"),i.Tb(),i.Ub(44,"mat-select"),i.Ub(45,"mat-option"),i.yc(46," Facebook "),i.Tb(),i.Ub(47,"mat-option"),i.yc(48," Instagram "),i.Tb(),i.Tb(),i.Tb(),i.Tb(),i.Ub(49,"div",12),i.Ub(50,"button",13),i.yc(51,"Filtrar"),i.Tb(),i.Ub(52,"button",13),i.yc(53,"Borrar"),i.Tb(),i.Tb(),i.Tb(),i.Ub(54,"div"),i.yc(55,"\xdaltimas ventas:"),i.Tb(),i.Ub(56,"div"),i.Ub(57,"table",14),i.Sb(58,15),i.xc(59,f,2,0,"th",16),i.xc(60,s,2,1,"td",17),i.Rb(),i.Sb(61,18),i.xc(62,p,2,0,"th",16),i.xc(63,C,2,1,"td",17),i.Rb(),i.Sb(64,19),i.xc(65,g,2,0,"th",16),i.xc(66,y,2,1,"td",17),i.Rb(),i.Sb(67,20),i.xc(68,T,2,0,"th",16),i.xc(69,U,2,1,"td",17),i.Rb(),i.Sb(70,21),i.xc(71,h,2,0,"th",16),i.xc(72,v,2,1,"td",17),i.Rb(),i.Sb(73,22),i.xc(74,P,2,0,"th",16),i.xc(75,x,2,1,"td",17),i.Rb(),i.Sb(76,23),i.xc(77,k,2,0,"th",16),i.xc(78,w,2,1,"td",17),i.Rb(),i.xc(79,_,1,0,"tr",24),i.xc(80,M,1,3,"tr",25),i.Tb(),i.Tb()),2&t){var a=i.pc(25),n=i.pc(32);i.Cb(3),i.lc("disabled",!e.selectedId),i.Cb(2),i.lc("disabled",!e.selectedId),i.Cb(17),i.lc("matDatepicker",a),i.Cb(1),i.lc("for",a),i.Cb(6),i.lc("matDatepicker",n),i.Cb(1),i.lc("for",n),i.Cb(27),i.lc("dataSource",e.dataSource),i.Cb(22),i.lc("matHeaderRowDef",e.displayedColumns),i.Cb(1),i.lc("matRowDefColumns",e.displayedColumns)}},directives:[o.a,l.b,l.e,b.b,r.b,r.d,l.g,r.a,d.a,m.k,u.j,u.c,u.e,u.b,u.g,u.i,u.d,u.a,u.f,u.h,n.i],styles:[".tabla-ventas[_ngcontent-%COMP%]{width:100%;margin-top:16px}.row-selected[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.12)}.actions[_ngcontent-%COMP%]{margin-bottom:16px}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-right:8px}@media screen and (max-width:600px){.actions[_ngcontent-%COMP%]{flex-wrap:wrap}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;margin-bottom:8px}}.filters[_ngcontent-%COMP%]{display:flex}.filters[_ngcontent-%COMP%]   .filter-actions[_ngcontent-%COMP%]{margin-left:16px}.filters[_ngcontent-%COMP%]   .filter-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .filters[_ngcontent-%COMP%]   .input-list[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{margin-right:8px}@media screen and (max-width:600px){.filters[_ngcontent-%COMP%]{flex-wrap:wrap}.filters[_ngcontent-%COMP%]   .filter-actions[_ngcontent-%COMP%]{width:100%;margin:0}.filters[_ngcontent-%COMP%]   .filter-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:block;width:100%;margin:0 0 8px}.filters[_ngcontent-%COMP%]   .input-list[_ngcontent-%COMP%], .filters[_ngcontent-%COMP%]   .input-list[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}}"]}),D),z=a("f0Cb");function I(t,e){1&t&&(i.Ub(0,"th",25),i.yc(1,"C\xf3digo"),i.Tb())}function V(t,e){if(1&t&&(i.Ub(0,"td",26),i.yc(1),i.Tb()),2&t){var a=e.$implicit;i.Cb(1),i.zc(a.codigo)}}function $(t,e){1&t&&(i.Ub(0,"th",25),i.yc(1,"Descripci\xf3n"),i.Tb())}function F(t,e){if(1&t&&(i.Ub(0,"td",26),i.yc(1),i.Tb()),2&t){var a=e.$implicit;i.Cb(1),i.zc(a.descripcion)}}function j(t,e){1&t&&(i.Ub(0,"th",25),i.yc(1,"Marca"),i.Tb())}function B(t,e){if(1&t&&(i.Ub(0,"td",26),i.yc(1),i.Tb()),2&t){var a=e.$implicit;i.Cb(1),i.zc(a.marca)}}function E(t,e){1&t&&(i.Ub(0,"th",25),i.yc(1,"Color"),i.Tb())}function H(t,e){if(1&t&&(i.Ub(0,"td",26),i.yc(1),i.Tb()),2&t){var a=e.$implicit;i.Cb(1),i.zc(a.color)}}function J(t,e){1&t&&(i.Ub(0,"th",25),i.yc(1,"Precio Unitario"),i.Tb())}function G(t,e){if(1&t&&(i.Ub(0,"td",26),i.yc(1),i.Tb()),2&t){var a=e.$implicit;i.Cb(1),i.zc(a.punitario)}}function N(t,e){1&t&&(i.Ub(0,"th",25),i.yc(1,"Cantidad"),i.Tb())}function K(t,e){if(1&t&&(i.Ub(0,"td",26),i.yc(1),i.Tb()),2&t){var a=e.$implicit;i.Cb(1),i.zc(a.cantidad)}}function L(t,e){1&t&&(i.Ub(0,"th",25),i.yc(1,"Total"),i.Tb())}function q(t,e){if(1&t&&(i.Ub(0,"td",26),i.yc(1),i.Tb()),2&t){var a=e.$implicit;i.Cb(1),i.zc(a.total)}}function X(t,e){1&t&&i.Pb(0,"tr",27)}var A=function(t){return{"row-selected":t}};function Q(t,e){if(1&t){var a=i.Vb();i.Ub(0,"tr",28),i.cc("click",(function(){i.rc(a);var t=e.$implicit;return i.gc().updateSelected(t)})),i.Tb()}if(2&t){var n=e.$implicit,c=i.gc();i.lc("ngClass",i.nc(1,A,c.selectedId===n.codigo))}}var W,Y,Z,tt=[{codigo:"1",descripcion:"lentes",marca:"Ray-Ban",color:"azul",punitario:"S/ 250",cantidad:"1",total:"S/ 250"},{codigo:"1",descripcion:"lentes",marca:"Ray-Ban",color:"azul",punitario:"S/ 250",cantidad:"1",total:"S/ 250"},{codigo:"1",descripcion:"lentes",marca:"Ray-Ban",color:"azul",punitario:"S/ 250",cantidad:"1",total:"S/ 250"},{codigo:"1",descripcion:"lentes",marca:"Ray-Ban",color:"azul",punitario:"S/ 250",cantidad:"1",total:"S/ 250"}],et=[{path:"",component:R},{path:"nuevo",component:(Y=function(){function t(e){_classCallCheck(this,t),this.location=e,this.selectedId="",this.displayedColumns=["codigo","descripcion","marca","color","punitario","cantidad","total"],this.dataSource=tt}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"cancel",value:function(t){this.location.back()}},{key:"updateSelected",value:function(t){}}]),t}(),Y.\u0275fac=function(t){return new(t||Y)(i.Ob(n.g))},Y.\u0275cmp=i.Ib({type:Y,selectors:[["app-nueva-venta"]],decls:97,vars:7,consts:[[1,"nuevo-cliente","mat-elevation-z8"],[1,"section-container"],[1,"input-list"],["type","text","matInput",""],["appearance","fill"],["matInput","",3,"matDatepicker"],["matSuffix","",3,"for"],["picker1",""],["picker2",""],["mat-table","",1,"mat-elevation-z8","tabla-productos",3,"dataSource"],["matColumnDef","codigo"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","descripcion"],["matColumnDef","marca"],["matColumnDef","color"],["matColumnDef","punitario"],["matColumnDef","cantidad"],["matColumnDef","total"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"ngClass","click",4,"matRowDef","matRowDefColumns"],[1,""],[1,"actions"],["mat-flat-button","",3,"click"],["mat-raised-button","","color","primary"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row","",3,"ngClass","click"]],template:function(t,e){if(1&t&&(i.Ub(0,"div",0),i.Ub(1,"div",1),i.Ub(2,"h2"),i.yc(3,"Registrar nueva venta"),i.Tb(),i.Ub(4,"div",2),i.Ub(5,"mat-form-field"),i.Ub(6,"mat-label"),i.yc(7,"Documento"),i.Tb(),i.Pb(8,"input",3),i.Tb(),i.Ub(9,"mat-form-field"),i.Ub(10,"mat-label"),i.yc(11,"Nombre Cliente"),i.Tb(),i.Pb(12,"input",3),i.Tb(),i.Ub(13,"mat-form-field",4),i.Ub(14,"mat-label"),i.yc(15,"Fecha de venta"),i.Tb(),i.Pb(16,"input",5),i.Pb(17,"mat-datepicker-toggle",6),i.Pb(18,"mat-datepicker",null,7),i.Tb(),i.Ub(20,"mat-form-field"),i.Ub(21,"mat-label"),i.yc(22,"Direcci\xf3n de entrega"),i.Tb(),i.Pb(23,"input",3),i.Tb(),i.Ub(24,"mat-form-field",4),i.Ub(25,"mat-label"),i.yc(26,"Fecha de despacho"),i.Tb(),i.Pb(27,"input",5),i.Pb(28,"mat-datepicker-toggle",6),i.Pb(29,"mat-datepicker",null,8),i.Tb(),i.Pb(31,"mat-divider"),i.Ub(32,"div"),i.Ub(33,"h2"),i.yc(34,"Productos"),i.Tb(),i.Ub(35,"div",2),i.Ub(36,"table",9),i.Sb(37,10),i.xc(38,I,2,0,"th",11),i.xc(39,V,2,1,"td",12),i.Rb(),i.Sb(40,13),i.xc(41,$,2,0,"th",11),i.xc(42,F,2,1,"td",12),i.Rb(),i.Sb(43,14),i.xc(44,j,2,0,"th",11),i.xc(45,B,2,1,"td",12),i.Rb(),i.Sb(46,15),i.xc(47,E,2,0,"th",11),i.xc(48,H,2,1,"td",12),i.Rb(),i.Sb(49,16),i.xc(50,J,2,0,"th",11),i.xc(51,G,2,1,"td",12),i.Rb(),i.Sb(52,17),i.xc(53,N,2,0,"th",11),i.xc(54,K,2,1,"td",12),i.Rb(),i.Sb(55,18),i.xc(56,L,2,0,"th",11),i.xc(57,q,2,1,"td",12),i.Rb(),i.xc(58,X,1,0,"tr",19),i.xc(59,Q,1,3,"tr",20),i.Tb(),i.Tb(),i.Tb(),i.Ub(60,"div",21),i.Ub(61,"mat-form-field"),i.Ub(62,"mat-label"),i.yc(63,"Canal de venta"),i.Tb(),i.Ub(64,"mat-select"),i.Ub(65,"mat-option"),i.yc(66," Facebook "),i.Tb(),i.Ub(67,"mat-option"),i.yc(68," Instagram "),i.Tb(),i.Tb(),i.Tb(),i.Ub(69,"mat-form-field"),i.Ub(70,"mat-label"),i.yc(71,"Vendedor"),i.Tb(),i.Ub(72,"mat-select"),i.Ub(73,"mat-option"),i.yc(74," Vendedor 1 "),i.Tb(),i.Ub(75,"mat-option"),i.yc(76," Vendedor 2 "),i.Tb(),i.Tb(),i.Tb(),i.Ub(77,"mat-form-field"),i.Ub(78,"mat-label"),i.yc(79,"Sub-total"),i.Tb(),i.Pb(80,"input",3),i.Tb(),i.Ub(81,"mat-form-field"),i.Ub(82,"mat-label"),i.yc(83,"Impuesto"),i.Tb(),i.Pb(84,"input",3),i.Tb(),i.Ub(85,"mat-form-field"),i.Ub(86,"mat-label"),i.yc(87,"Total"),i.Tb(),i.Pb(88,"input",3),i.Tb(),i.Tb(),i.Tb(),i.Tb(),i.Pb(89,"mat-divider"),i.Ub(90,"div",22),i.Ub(91,"button",23),i.cc("click",(function(t){return e.cancel(t)})),i.yc(92,"Cancelar"),i.Tb(),i.Ub(93,"button",24),i.yc(94,"Borrar"),i.Tb(),i.Ub(95,"button",24),i.yc(96,"Guardar"),i.Tb(),i.Tb(),i.Tb()),2&t){var a=i.pc(19),n=i.pc(30);i.Cb(16),i.lc("matDatepicker",a),i.Cb(1),i.lc("for",a),i.Cb(10),i.lc("matDatepicker",n),i.Cb(1),i.lc("for",n),i.Cb(8),i.lc("dataSource",e.dataSource),i.Cb(22),i.lc("matHeaderRowDef",e.displayedColumns),i.Cb(1),i.lc("matRowDefColumns",e.displayedColumns)}},directives:[l.b,l.e,b.b,r.b,r.d,l.g,r.a,z.a,u.j,u.c,u.e,u.b,u.g,u.i,d.a,m.k,o.a,u.d,u.a,u.f,u.h,n.i],styles:[".nueva-venta[_ngcontent-%COMP%]{padding:20px}.section-container[_ngcontent-%COMP%]:not(:first-child){padding-top:20px}.section-container[_ngcontent-%COMP%]{padding-bottom:20px}.input-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.input-list[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{margin-right:20px;width:300px}.actions[_ngcontent-%COMP%]{padding-top:20px;display:flex;justify-content:flex-end}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:8px}"]}),Y)},{path:"editar/:id",component:(W=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}(),W.\u0275fac=function(t){return new(t||W)},W.\u0275cmp=i.Ib({type:W,selectors:[["app-editar-venta"]],decls:2,vars:0,template:function(t,e){1&t&&(i.Ub(0,"p"),i.yc(1,"editar-venta works!"),i.Tb())},styles:[""]}),W)}],at=((Z=function t(){_classCallCheck(this,t)}).\u0275mod=i.Mb({type:Z}),Z.\u0275inj=i.Lb({factory:function(t){return new(t||Z)},imports:[[c.d.forChild(et)],c.d]}),Z),nt=a("hctd");a.d(e,"VentasModule",(function(){return it}));var ct,it=((ct=function t(){_classCallCheck(this,t)}).\u0275mod=i.Mb({type:ct}),ct.\u0275inj=i.Lb({factory:function(t){return new(t||ct)},imports:[[n.c,at,nt.a]]}),ct)}}]);
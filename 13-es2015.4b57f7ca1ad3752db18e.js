(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{isUK:function(t,e,n){"use strict";n.r(e);var o=n("ofXK"),a=n("tyNb"),i=n("3Pt+"),c=n("fXoL"),r=n("aR35"),l=n("tk/3");let b=(()=>{class t{constructor(t,e){this.httpClient=t,this.config=e}getCanales(){return this.httpClient.get(`${this.config.api}/Canal/GetCanal`)}}return t.\u0275fac=function(e){return new(e||t)(c.Yb(l.a),c.Yb(r.a))},t.\u0275prov=c.Kb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),s=(()=>{class t{constructor(t,e){this.httpClient=t,this.config=e}getVentaParams(t,e,n,o,a,i){return this.httpClient.get(`${this.config.api}/Venta/GetVentaByParams?estado=${t}&nombre=${e}&nuDocumento=${n}&idCanal=${o}&fechaDesdeVenta=${a}&fechaHastaVenta=${i}`)}getVentas(){return this.httpClient.get(`${this.config.api}/Venta/GetVenta`)}save(t){return this.httpClient.post(`${this.config.api}/Venta/PostVenta`,t)}delete(t){return this.httpClient.delete(`${this.config.api}/Venta/DeleteVenta?ID_VENTA=${t}`)}}return t.\u0275fac=function(e){return new(e||t)(c.Yb(l.a),c.Yb(r.a))},t.\u0275prov=c.Kb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var d=n("bTqV"),u=n("NFeN"),m=n("kmnG"),f=n("qFsG"),p=n("iadO"),C=n("d3UM"),g=n("FKr1"),h=n("+0xr"),T=n("M9IT");function v(t,e){if(1&t&&(c.Ub(0,"mat-option",13),c.Dc(1),c.Tb()),2&t){const t=e.$implicit;c.lc("value",t.codigo),c.Cb(1),c.Fc(" ",t.nombre," ")}}function D(t,e){1&t&&(c.Ub(0,"th",32),c.Dc(1,"C\xf3digo"),c.Tb())}function U(t,e){if(1&t&&(c.Ub(0,"td",33),c.Dc(1),c.Tb()),2&t){const t=e.$implicit;c.Cb(1),c.Ec(t.codigo)}}function w(t,e){1&t&&(c.Ub(0,"th",32),c.Dc(1,"Cliente"),c.Tb())}function P(t,e){if(1&t&&(c.Ub(0,"td",33),c.Dc(1),c.Tb()),2&t){const t=e.$implicit;c.Cb(1),c.Ec(t.cliente)}}function O(t,e){1&t&&(c.Ub(0,"th",32),c.Dc(1,"Documento"),c.Tb())}function _(t,e){if(1&t&&(c.Ub(0,"td",33),c.Dc(1),c.Tb()),2&t){const t=e.$implicit;c.Cb(1),c.Ec(t.documento)}}function S(t,e){1&t&&(c.Ub(0,"th",32),c.Dc(1,"Fecha Venta"),c.Tb())}function k(t,e){if(1&t&&(c.Ub(0,"td",33),c.Dc(1),c.hc(2,"date"),c.Tb()),2&t){const t=e.$implicit;c.Cb(1),c.Ec(c.ic(2,1,t.fecha))}}function y(t,e){1&t&&(c.Ub(0,"th",32),c.Dc(1,"Total"),c.Tb())}function I(t,e){if(1&t&&(c.Ub(0,"td",33),c.Dc(1),c.Tb()),2&t){const t=e.$implicit;c.Cb(1),c.Ec(t.total)}}function M(t,e){1&t&&(c.Ub(0,"th",32),c.Dc(1,"Estado"),c.Tb())}function x(t,e){if(1&t&&(c.Ub(0,"td",33),c.Dc(1),c.Tb()),2&t){const t=e.$implicit;c.Cb(1),c.Fc(" ",0===t.estado?"Anulada":"Ingresada"," ")}}function V(t,e){1&t&&(c.Ub(0,"th",32),c.Dc(1,"Canal"),c.Tb())}function $(t,e){if(1&t&&(c.Ub(0,"td",33),c.Dc(1),c.Tb()),2&t){const t=e.$implicit;c.Cb(1),c.Ec(t.canal)}}function N(t,e){1&t&&c.Pb(0,"tr",34)}const G=function(t){return{"row-selected":t}};function R(t,e){if(1&t){const t=c.Vb();c.Ub(0,"tr",35),c.cc("click",(function(){c.vc(t);const n=e.$implicit;return c.gc().updateSelected(n)})),c.Tb()}if(2&t){const t=e.$implicit,n=c.gc();c.lc("ngClass",c.nc(1,G,n.selectedId===t.codigo))}}const E=function(){return[5,10,25,100]};let F=(()=>{class t{constructor(t,e,n,o){this.router=t,this.route=e,this.canalService=n,this.ventaService=o,this.selectedId=0,this.displayedColumns=["codigo","cliente","documento","fventa","total","estado","canal"],this.dataSource=[],this.today=new Date,this.tomorrow=new Date,this.filterGroup=new i.g({nombreCliente:new i.d(""),documento:new i.d(""),inicio:new i.d,fin:new i.d,estado:new i.d(""),canal:new i.d("")})}search(){this.loadVentas()}ngOnInit(){this.canales$=this.canalService.getCanales(),this.loadVentas()}borrar(){this.filterGroup=new i.g({nombreCliente:new i.d(""),documento:new i.d(""),inicio:new i.d,fin:new i.d,estado:new i.d(""),canal:new i.d("")})}loadVentas(){const t=this.filterGroup.get("nombreCliente").value,e=this.filterGroup.get("documento").value,n=this.filterGroup.get("estado").value,o=this.filterGroup.get("canal").value,a=this.filterGroup.get("inicio").value,i=this.filterGroup.get("fin").value;this.ventaService.getVentaParams(n,t,e,o,a?a.toISOString():a,i?i.toISOString():i).subscribe(t=>{this.dataSource=t})}nuevaVenta(t){this.router.navigate(["nuevo"],{relativeTo:this.route})}updateSelected(t){this.selectedId=this.selectedId===t.codigo?0:t.codigo}modificarVenta(t){this.router.navigate(["editar",this.selectedId],{relativeTo:this.route})}anularVenta(){this.selectedId&&this.ventaService.delete(this.selectedId).subscribe(()=>{this.loadVentas()})}}return t.\u0275fac=function(e){return new(e||t)(c.Ob(a.c),c.Ob(a.a),c.Ob(b),c.Ob(s))},t.\u0275cmp=c.Ib({type:t,selectors:[["app-main"]],decls:86,vars:18,consts:[[1,"actions"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","color","warn",3,"disabled","click"],[1,"filters",3,"formGroup"],[1,"input-list"],["type","text","matInput","","formControlName","nombreCliente"],["type","text","matInput","","formControlName","documento"],["matInput","","formControlName","inicio",3,"matDatepicker"],["matSuffix","",3,"for"],["picker1",""],["matInput","","formControlName","fin",3,"matDatepicker"],["picker2",""],["formControlName","estado"],[3,"value"],["formControlName","canal"],[3,"value",4,"ngFor","ngForOf"],[1,"filter-actions"],["mat-raised-button","","color","warn",3,"click"],[1,"table-wrapper"],["mat-table","",1,"mat-elevation-z8","tabla-ventas",3,"dataSource"],["matColumnDef","codigo"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","cliente"],["matColumnDef","documento"],["matColumnDef","fventa"],["matColumnDef","total"],["matColumnDef","estado"],["matColumnDef","canal"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"ngClass","click",4,"matRowDef","matRowDefColumns"],[3,"length","pageSize","pageSizeOptions"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row","",3,"ngClass","click"]],template:function(t,e){if(1&t&&(c.Ub(0,"div",0),c.Ub(1,"button",1),c.cc("click",(function(t){return e.nuevaVenta(t)})),c.Ub(2,"mat-icon"),c.Dc(3," add_shopping_cart"),c.Tb(),c.Dc(4,"Nueva Venta "),c.Tb(),c.Ub(5,"button",2),c.cc("click",(function(){return e.anularVenta()})),c.Ub(6,"mat-icon"),c.Dc(7," remove_shopping_cart"),c.Tb(),c.Dc(8,"Anular Venta "),c.Tb(),c.Tb(),c.Ub(9,"div"),c.Dc(10,"Filtrar Ventas:"),c.Tb(),c.Ub(11,"form",3),c.Ub(12,"div",4),c.Ub(13,"mat-form-field"),c.Ub(14,"mat-label"),c.Dc(15,"Nombre cliente"),c.Tb(),c.Pb(16,"input",5),c.Tb(),c.Ub(17,"mat-form-field"),c.Ub(18,"mat-label"),c.Dc(19,"Documento"),c.Tb(),c.Pb(20,"input",6),c.Tb(),c.Ub(21,"mat-form-field"),c.Ub(22,"mat-label"),c.Dc(23,"Fecha desde"),c.Tb(),c.Pb(24,"input",7),c.Pb(25,"mat-datepicker-toggle",8),c.Pb(26,"mat-datepicker",null,9),c.Tb(),c.Ub(28,"mat-form-field"),c.Ub(29,"mat-label"),c.Dc(30,"Fecha hasta"),c.Tb(),c.Pb(31,"input",10),c.Pb(32,"mat-datepicker-toggle",8),c.Pb(33,"mat-datepicker",null,11),c.Tb(),c.Ub(35,"mat-form-field"),c.Ub(36,"mat-label"),c.Dc(37,"Estado"),c.Tb(),c.Ub(38,"mat-select",12),c.Ub(39,"mat-option",13),c.Dc(40," Anulada "),c.Tb(),c.Ub(41,"mat-option",13),c.Dc(42," Ingresada "),c.Tb(),c.Tb(),c.Tb(),c.Ub(43,"mat-form-field"),c.Ub(44,"mat-label"),c.Dc(45,"Canal"),c.Tb(),c.Ub(46,"mat-select",14),c.Cc(47,v,2,2,"mat-option",15),c.hc(48,"async"),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Ub(49,"div",16),c.Ub(50,"button",1),c.cc("click",(function(){return e.search()})),c.Ub(51,"mat-icon"),c.Dc(52,"search"),c.Tb(),c.Dc(53,"Filtrar "),c.Tb(),c.Ub(54,"button",17),c.cc("click",(function(){return e.borrar()})),c.Ub(55,"mat-icon"),c.Dc(56,"clear"),c.Tb(),c.Dc(57,"Borrar "),c.Tb(),c.Tb(),c.Ub(58,"div"),c.Dc(59,"\xdaltimas ventas:"),c.Tb(),c.Ub(60,"div",18),c.Ub(61,"table",19),c.Sb(62,20),c.Cc(63,D,2,0,"th",21),c.Cc(64,U,2,1,"td",22),c.Rb(),c.Sb(65,23),c.Cc(66,w,2,0,"th",21),c.Cc(67,P,2,1,"td",22),c.Rb(),c.Sb(68,24),c.Cc(69,O,2,0,"th",21),c.Cc(70,_,2,1,"td",22),c.Rb(),c.Sb(71,25),c.Cc(72,S,2,0,"th",21),c.Cc(73,k,3,3,"td",22),c.Rb(),c.Sb(74,26),c.Cc(75,y,2,0,"th",21),c.Cc(76,I,2,1,"td",22),c.Rb(),c.Sb(77,27),c.Cc(78,M,2,0,"th",21),c.Cc(79,x,2,1,"td",22),c.Rb(),c.Sb(80,28),c.Cc(81,V,2,0,"th",21),c.Cc(82,$,2,1,"td",22),c.Rb(),c.Cc(83,N,1,0,"tr",29),c.Cc(84,R,1,3,"tr",30),c.Tb(),c.Tb(),c.Pb(85,"mat-paginator",31)),2&t){const t=c.sc(27),n=c.sc(34);c.Cb(5),c.lc("disabled",!e.selectedId),c.Cb(6),c.lc("formGroup",e.filterGroup),c.Cb(13),c.lc("matDatepicker",t),c.Cb(1),c.lc("for",t),c.Cb(6),c.lc("matDatepicker",n),c.Cb(1),c.lc("for",n),c.Cb(7),c.lc("value",0),c.Cb(2),c.lc("value",1),c.Cb(6),c.lc("ngForOf",c.ic(48,15,e.canales$)),c.Cb(14),c.lc("dataSource",e.dataSource),c.Cb(22),c.lc("matHeaderRowDef",e.displayedColumns),c.Cb(1),c.lc("matRowDefColumns",e.displayedColumns),c.Cb(1),c.lc("length",100)("pageSize",10)("pageSizeOptions",c.mc(17,E))}},directives:[d.a,u.a,i.r,i.m,i.h,m.b,m.e,f.b,i.b,i.l,i.f,p.b,p.d,m.g,p.a,C.a,g.k,o.k,h.j,h.c,h.e,h.b,h.g,h.i,T.a,h.d,h.a,h.f,h.h,o.j],pipes:[o.b,o.e],styles:[".tabla-ventas[_ngcontent-%COMP%]{margin-top:16px;min-width:700px;width:100%}.table-wrapper[_ngcontent-%COMP%]{overflow-x:auto}.row-selected[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.12)}.actions[_ngcontent-%COMP%]{margin-bottom:16px}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-right:8px}@media screen and (max-width:600px){.actions[_ngcontent-%COMP%]{flex-wrap:wrap}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;margin-bottom:8px}}.filter-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-right:8px;margin-bottom:1rem}@media screen and (max-width:600px){.filter-actions[_ngcontent-%COMP%]{flex-wrap:wrap}.filter-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;margin-bottom:8px}}.filters[_ngcontent-%COMP%]{display:flex}.filters[_ngcontent-%COMP%]   .filter-actions[_ngcontent-%COMP%]{margin-left:16px}.filters[_ngcontent-%COMP%]   .filter-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .filters[_ngcontent-%COMP%]   .input-list[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{margin-right:8px}@media screen and (max-width:600px){.filters[_ngcontent-%COMP%]{flex-wrap:wrap}.filters[_ngcontent-%COMP%]   .filter-actions[_ngcontent-%COMP%]{width:100%;margin:0}.filters[_ngcontent-%COMP%]   .filter-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:block;margin:0 0 8px;width:100%;margin-bottom:8px}.filters[_ngcontent-%COMP%]   .input-list[_ngcontent-%COMP%], .filters[_ngcontent-%COMP%]   .input-list[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}}"]}),t})();var q=n("0IaG"),A=n("GPUG");let K=(()=>{class t{constructor(t,e){this.dialogRef=t,this.productoService=e,this.codigoControl=new i.d("",[i.q.required]),this.descripcionControl=new i.d({value:"",disabled:!0},[i.q.required]),this.cantidadControl=new i.d(1,[i.q.required,i.q.min(1)]),this.productControl=new i.d(null,[i.q.required])}ngOnInit(){}onNoClick(){this.dialogRef.close()}onKeyPress(t){return 8==t.charCode||0==t.charCode||13==t.charCode?null:t.charCode>=48&&t.charCode<=57}save(){this.producto={cantidad:this.cantidadControl.value,codigo:+this.codigoControl.value,descripcion:this.productControl.value.descripcion,marca:this.productControl.value.marca,punitario:10,total:10*this.cantidadControl.value},this.dialogRef.close(this.producto)}onKeyPressCode(t){13===t.charCode&&this.productoService.getProductos(this.codigoControl.value).subscribe(t=>{t.length>0&&(this.productControl.setValue(t[0]),this.descripcionControl.setValue(t[0].descripcion))})}isDisabled(){return this.cantidadControl.invalid||this.codigoControl.invalid||""===this.descripcionControl.value}}return t.\u0275fac=function(e){return new(e||t)(c.Ob(q.e),c.Ob(A.a))},t.\u0275cmp=c.Ib({type:t,selectors:[["app-agregar-producto"]],decls:21,vars:4,consts:[["mat-dialog-title",""],["mat-dialog-content",""],[1,"control-container"],["type","text","matInput","",3,"formControl","keypress"],["type","text","matInput","",3,"formControl"],["type","number","matInput","",3,"formControl","keypress"],["mat-dialog-actions",""],["mat-button","",3,"click"],["mat-raised-button","","color","primary","cdkFocusInitial","",3,"disabled","click"]],template:function(t,e){1&t&&(c.Ub(0,"h1",0),c.Dc(1,"Agregar producto"),c.Tb(),c.Ub(2,"div",1),c.Ub(3,"div",2),c.Ub(4,"mat-form-field"),c.Ub(5,"mat-label"),c.Dc(6,"Codigo"),c.Tb(),c.Ub(7,"input",3),c.cc("keypress",(function(t){return e.onKeyPressCode(t)})),c.Tb(),c.Tb(),c.Ub(8,"mat-form-field"),c.Ub(9,"mat-label"),c.Dc(10,"Descripcion"),c.Tb(),c.Pb(11,"input",4),c.Tb(),c.Ub(12,"mat-form-field"),c.Ub(13,"mat-label"),c.Dc(14,"Cantidad"),c.Tb(),c.Ub(15,"input",5),c.cc("keypress",(function(t){return e.onKeyPress(t)})),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Ub(16,"div",6),c.Ub(17,"button",7),c.cc("click",(function(){return e.onNoClick()})),c.Dc(18,"Cancelar"),c.Tb(),c.Ub(19,"button",8),c.cc("click",(function(){return e.save()})),c.Dc(20,"Agregar"),c.Tb(),c.Tb()),2&t&&(c.Cb(7),c.lc("formControl",e.codigoControl),c.Cb(4),c.lc("formControl",e.descripcionControl),c.Cb(4),c.lc("formControl",e.cantidadControl),c.Cb(4),c.lc("disabled",e.isDisabled()))},directives:[q.f,q.c,m.b,m.e,f.b,i.b,i.l,i.e,i.o,q.b,d.a],styles:[".control-container[_ngcontent-%COMP%]{display:flex;flex-direction:column}"]}),t})();var H=n("qfBg");let z=(()=>{class t{constructor(t,e){this.httpClient=t,this.config=e}getCliente(t){return this.httpClient.get(`${this.config.api}/Cliente/GetClienteByDNI?dniCliente=${t}`)}}return t.\u0275fac=function(e){return new(e||t)(c.Yb(l.a),c.Yb(r.a))},t.\u0275prov=c.Kb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var L=n("f0Cb");function j(t,e){if(1&t&&(c.Ub(0,"mat-option",39),c.Dc(1),c.Tb()),2&t){const t=e.$implicit;c.lc("value",t.codigo),c.Cb(1),c.Fc(" ",t.nombre," ")}}function B(t,e){if(1&t&&(c.Ub(0,"mat-option",39),c.Dc(1),c.Tb()),2&t){const t=e.$implicit;c.lc("value",t.codigo),c.Cb(1),c.Fc(" ",t.nombre," ")}}function Y(t,e){1&t&&(c.Ub(0,"th",40),c.Dc(1,"C\xf3digo"),c.Tb())}function J(t,e){if(1&t&&(c.Ub(0,"td",41),c.Dc(1),c.Tb()),2&t){const t=e.$implicit;c.Cb(1),c.Ec(t.codigo)}}function X(t,e){1&t&&(c.Ub(0,"th",40),c.Dc(1,"Descripci\xf3n"),c.Tb())}function Q(t,e){if(1&t&&(c.Ub(0,"td",41),c.Dc(1),c.Tb()),2&t){const t=e.$implicit;c.Cb(1),c.Fc(" ",t.descripcion," ")}}function W(t,e){1&t&&(c.Ub(0,"th",40),c.Dc(1,"Marca"),c.Tb())}function Z(t,e){if(1&t&&(c.Ub(0,"td",41),c.Dc(1),c.Tb()),2&t){const t=e.$implicit;c.Cb(1),c.Ec(t.marca)}}function tt(t,e){1&t&&(c.Ub(0,"th",40),c.Dc(1,"Precio Unitario"),c.Tb())}function et(t,e){if(1&t&&(c.Ub(0,"td",41),c.Dc(1),c.Tb()),2&t){const t=e.$implicit;c.Cb(1),c.Fc("S/ ",t.punitario,"")}}function nt(t,e){1&t&&(c.Ub(0,"th",40),c.Dc(1,"Cantidad"),c.Tb())}function ot(t,e){if(1&t&&(c.Ub(0,"td",41),c.Dc(1),c.Tb()),2&t){const t=e.$implicit;c.Cb(1),c.Ec(t.cantidad)}}function at(t,e){1&t&&(c.Ub(0,"th",40),c.Dc(1,"Total"),c.Tb())}function it(t,e){if(1&t&&(c.Ub(0,"td",41),c.Dc(1),c.Tb()),2&t){const t=e.$implicit;c.Cb(1),c.Fc("S/ ",t.total,"")}}function ct(t,e){1&t&&c.Pb(0,"tr",42)}const rt=function(t){return{"row-selected":t}};function lt(t,e){if(1&t){const t=c.Vb();c.Ub(0,"tr",43),c.cc("click",(function(){c.vc(t);const n=e.$implicit;return c.gc().updateSelected(n)})),c.Tb()}if(2&t){const t=e.$implicit,n=c.gc();c.lc("ngClass",c.nc(1,rt,n.selectedId===t.codigo))}}const bt=[{path:"",component:F},{path:"nuevo",component:(()=>{class t{constructor(t,e,n,o,a,c){this.location=t,this.dialog=e,this.canalService=n,this.userService=o,this.clientService=a,this.ventaService=c,this.selectedId=0,this.displayedColumns=["codigo","descripcion","marca","punitario","cantidad","total"],this.dataSource=[],this.formGroup=new i.g({dniControl:new i.d("",[i.q.required]),idCliente:new i.d("",[i.q.required]),canalComentario:new i.d(""),vendedorControl:new i.d("",[i.q.required]),canalControl:new i.d("",[i.q.required]),direccionControl:new i.d("",[i.q.required]),fechaVentaControl:new i.d("",[i.q.required]),fechaDespachoControl:new i.d("",[i.q.required]),nombreControl:new i.d({value:"",disabled:!0},[i.q.required])})}ngOnInit(){this.canales$=this.canalService.getCanales(),this.users$=this.userService.getUsers()}cancel(t){this.location.back()}onKeyPress(t){13===t.keyCode&&this.clientService.getCliente(this.formGroup.get("dniControl").value).subscribe(t=>{t&&(this.formGroup.get("nombreControl").setValue(t.nombre),this.formGroup.get("idCliente").setValue(t.codigo))})}updateSelected(t){this.selectedId=this.selectedId===t.codigo?0:t.codigo}removeProduct(){this.dataSource=this.dataSource.filter(t=>t.codigo!==this.selectedId)}openDialog(){this.dialog.open(K,{width:"500px"}).afterClosed().subscribe(t=>{t&&(this.dataSource=[...this.dataSource,t])})}getSubTotal(){return this.dataSource.reduce((t,e)=>t+e.total,0)}getIgv(){return 18*this.getSubTotal()/100}getTotal(){return this.getSubTotal()+this.getIgv()}save(){const t={entityVentaDetalle:this.dataSource.map(t=>({iD_PRODUCTO:t.codigo,vdE_NU_CANTIDAD_PEDIDO:t.cantidad,vdE_COSTO_SUBTOTAL:t.punitario,vdE_COSTO_TOTAL:1.18*t.punitario,vdE_IMPUESTOS:18*t.punitario/100})),entityVentaInsertUpdate:{iD_CANAL_PRINCIPAL:this.formGroup.get("canalControl").value,iD_CLIENTE:this.formGroup.get("idCliente").value,iD_USUARIO:this.formGroup.get("vendedorControl").value,veN_COMENTARIO:this.formGroup.get("canalComentario").value,veN_DIRECCION_ENTREGA:this.formGroup.get("canalComentario").value,veN_FECHA_VENTA:this.formGroup.get("fechaVentaControl").value,veN_FECHA_DESPACHO:this.formGroup.get("fechaDespachoControl").value,veN_COSTO_TOTAL_VENTA:this.getTotal()}};this.ventaService.save(t).subscribe(()=>{this.location.back()},t=>{})}isDisabled(){return this.formGroup.invalid||0===this.dataSource.length}}return t.\u0275fac=function(e){return new(e||t)(c.Ob(o.h),c.Ob(q.a),c.Ob(b),c.Ob(H.a),c.Ob(z),c.Ob(s))},t.\u0275cmp=c.Ib({type:t,selectors:[["app-nueva-venta"]],decls:116,vars:18,consts:[[1,"nueva-venta","mat-elevation-z8",3,"formGroup"],[1,"section-container"],["cdkFocusRegionStart","",1,"input-list"],["cdkFocusInitial",""],["type","text","matInput","","formControlName","dniControl",3,"keypress"],["type","text","matInput","","formControlName","nombreControl"],["matInput","","formControlName","fechaVentaControl",3,"matDatepicker"],["matSuffix","",3,"for"],["picker1",""],["type","text","matInput","","formControlName","direccionControl"],["matInput","","formControlName","fechaDespachoControl",3,"matDatepicker"],["picker2",""],["formControlName","canalControl"],[3,"value",4,"ngFor","ngForOf"],["formControlName","vendedorControl"],["cdkFocusRegionEnd",""],["matInput","","formControlName","canalComentario"],[1,"table-wrapper"],["mat-table","",1,"mat-elevation-z8","tabla-venta",3,"dataSource"],["matColumnDef","codigo"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","descripcion"],["matColumnDef","marca"],["matColumnDef","punitario"],["matColumnDef","cantidad"],["matColumnDef","total"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"ngClass","click",4,"matRowDef","matRowDefColumns"],[1,"product-actions"],["mat-icon-button","","color","accent","type","button",3,"click"],["align","right",1,"row"],[1,"col-lg-12"],["matPrefix",""],["type","text","matInput","","disabled","",3,"value"],[1,"actions"],["mat-flat-button","","type","button",3,"click"],["mat-raised-button","","color","warn","type","button"],["mat-raised-button","","color","primary","type","button",3,"disabled","click"],[3,"value"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row","",3,"ngClass","click"]],template:function(t,e){if(1&t&&(c.Ub(0,"form",0),c.Ub(1,"div",1),c.Ub(2,"h2"),c.Dc(3,"Registrar nueva venta"),c.Tb(),c.Ub(4,"div",2),c.Ub(5,"mat-form-field",3),c.Ub(6,"mat-label"),c.Dc(7,"Documento"),c.Tb(),c.Ub(8,"input",4),c.cc("keypress",(function(t){return e.onKeyPress(t)})),c.Tb(),c.Tb(),c.Ub(9,"mat-form-field"),c.Ub(10,"mat-label"),c.Dc(11,"Nombre Cliente"),c.Tb(),c.Pb(12,"input",5),c.Tb(),c.Ub(13,"mat-form-field"),c.Ub(14,"mat-label"),c.Dc(15,"Fecha de venta"),c.Tb(),c.Pb(16,"input",6),c.Pb(17,"mat-datepicker-toggle",7),c.Pb(18,"mat-datepicker",null,8),c.Tb(),c.Ub(20,"mat-form-field"),c.Ub(21,"mat-label"),c.Dc(22,"Direcci\xf3n de entrega"),c.Tb(),c.Pb(23,"input",9),c.Tb(),c.Ub(24,"mat-form-field"),c.Ub(25,"mat-label"),c.Dc(26,"Fecha de despacho"),c.Tb(),c.Pb(27,"input",10),c.Pb(28,"mat-datepicker-toggle",7),c.Pb(29,"mat-datepicker",null,11),c.Tb(),c.Ub(31,"mat-form-field"),c.Ub(32,"mat-label"),c.Dc(33,"Canal de venta"),c.Tb(),c.Ub(34,"mat-select",12),c.Cc(35,j,2,2,"mat-option",13),c.hc(36,"async"),c.Tb(),c.Tb(),c.Ub(37,"mat-form-field"),c.Ub(38,"mat-label"),c.Dc(39,"Vendedor"),c.Tb(),c.Ub(40,"mat-select",14),c.Cc(41,B,2,2,"mat-option",13),c.hc(42,"async"),c.Tb(),c.Tb(),c.Ub(43,"mat-form-field",15),c.Ub(44,"mat-label"),c.Dc(45,"Comentario"),c.Tb(),c.Pb(46,"textarea",16),c.Tb(),c.Pb(47,"mat-divider"),c.Tb(),c.Ub(48,"div"),c.Ub(49,"h2"),c.Dc(50,"Productos"),c.Tb(),c.Ub(51,"div",17),c.Ub(52,"table",18),c.Sb(53,19),c.Cc(54,Y,2,0,"th",20),c.Cc(55,J,2,1,"td",21),c.Rb(),c.Sb(56,22),c.Cc(57,X,2,0,"th",20),c.Cc(58,Q,2,1,"td",21),c.Rb(),c.Sb(59,23),c.Cc(60,W,2,0,"th",20),c.Cc(61,Z,2,1,"td",21),c.Rb(),c.Sb(62,24),c.Cc(63,tt,2,0,"th",20),c.Cc(64,et,2,1,"td",21),c.Rb(),c.Sb(65,25),c.Cc(66,nt,2,0,"th",20),c.Cc(67,ot,2,1,"td",21),c.Rb(),c.Sb(68,26),c.Cc(69,at,2,0,"th",20),c.Cc(70,it,2,1,"td",21),c.Rb(),c.Cc(71,ct,1,0,"tr",27),c.Cc(72,lt,1,3,"tr",28),c.Tb(),c.Tb(),c.Tb(),c.Ub(73,"div",29),c.Ub(74,"button",30),c.cc("click",(function(){return e.openDialog()})),c.Ub(75,"mat-icon"),c.Dc(76,"add_circle_outline"),c.Tb(),c.Tb(),c.Ub(77,"button",30),c.cc("click",(function(){return e.removeProduct()})),c.Ub(78,"mat-icon"),c.Dc(79,"remove_circle_outline"),c.Tb(),c.Tb(),c.Tb(),c.Ub(80,"div",31),c.Ub(81,"div",32),c.Ub(82,"mat-form-field"),c.Ub(83,"mat-label"),c.Dc(84,"Sub-total"),c.Tb(),c.Ub(85,"span",33),c.Dc(86,"S/ \xa0"),c.Tb(),c.Pb(87,"input",34),c.Tb(),c.Tb(),c.Tb(),c.Ub(88,"div",31),c.Ub(89,"div",32),c.Ub(90,"mat-form-field"),c.Ub(91,"mat-label"),c.Dc(92,"Impuesto"),c.Tb(),c.Ub(93,"span",33),c.Dc(94,"S/ \xa0"),c.Tb(),c.Pb(95,"input",34),c.Tb(),c.Tb(),c.Tb(),c.Ub(96,"div",31),c.Ub(97,"div",32),c.Ub(98,"mat-form-field"),c.Ub(99,"mat-label"),c.Dc(100,"Total"),c.Tb(),c.Ub(101,"span",33),c.Dc(102,"S/ \xa0"),c.Tb(),c.Pb(103,"input",34),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Pb(104,"mat-divider"),c.Ub(105,"div",35),c.Ub(106,"button",36),c.cc("click",(function(t){return e.cancel(t)})),c.Dc(107,"Cancelar"),c.Tb(),c.Ub(108,"button",37),c.Ub(109,"mat-icon"),c.Dc(110,"delete"),c.Tb(),c.Dc(111,"Borrar "),c.Tb(),c.Ub(112,"button",38),c.cc("click",(function(){return e.save()})),c.Ub(113,"mat-icon"),c.Dc(114,"save"),c.Tb(),c.Dc(115,"Guardar "),c.Tb(),c.Tb(),c.Tb()),2&t){const t=c.sc(19),n=c.sc(30);c.lc("formGroup",e.formGroup),c.Cb(16),c.lc("matDatepicker",t),c.Cb(1),c.lc("for",t),c.Cb(10),c.lc("matDatepicker",n),c.Cb(1),c.lc("for",n),c.Cb(7),c.lc("ngForOf",c.ic(36,14,e.canales$)),c.Cb(6),c.lc("ngForOf",c.ic(42,16,e.users$)),c.Cb(11),c.lc("dataSource",e.dataSource),c.Cb(19),c.lc("matHeaderRowDef",e.displayedColumns),c.Cb(1),c.lc("matRowDefColumns",e.displayedColumns),c.Cb(15),c.lc("value",e.getSubTotal()),c.Cb(8),c.lc("value",e.getIgv()),c.Cb(8),c.lc("value",e.getTotal()),c.Cb(9),c.lc("disabled",e.isDisabled())}},directives:[i.r,i.m,i.h,m.b,m.e,f.b,i.b,i.l,i.f,p.b,p.d,m.g,p.a,C.a,o.k,L.a,h.j,h.c,h.e,h.b,h.g,h.i,d.a,u.a,m.f,g.k,h.d,h.a,h.f,h.h,o.j],pipes:[o.b],styles:[".nueva-venta[_ngcontent-%COMP%]{padding:20px}.tabla-venta[_ngcontent-%COMP%]{min-width:700px;margin-top:16px;width:100%}.table-wrapper[_ngcontent-%COMP%]{overflow-x:auto}.section-container[_ngcontent-%COMP%]:not(:first-child){padding-top:20px}.section-container[_ngcontent-%COMP%], .totalizado[_ngcontent-%COMP%]{padding-bottom:20px}.totalizado[_ngcontent-%COMP%]{margin-top:5px}.product-actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.row-selected[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.12)}.input-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.input-list[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{margin-right:20px;width:300px}.actions[_ngcontent-%COMP%]{padding-top:20px;display:flex;justify-content:flex-end}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:8px}@media screen and (max-width:600px){.actions[_ngcontent-%COMP%]{flex-wrap:wrap}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;margin-top:8px}}"]}),t})()}];let st=(()=>{class t{}return t.\u0275mod=c.Mb({type:t}),t.\u0275inj=c.Lb({factory:function(e){return new(e||t)},imports:[[a.e.forChild(bt)],a.e]}),t})();var dt=n("hctd");n.d(e,"VentasModule",(function(){return ut}));let ut=(()=>{class t{}return t.\u0275mod=c.Mb({type:t}),t.\u0275inj=c.Lb({factory:function(e){return new(e||t)},imports:[[o.c,st,dt.a,i.p]]}),t})()}}]);
function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function _createClass(t,n,e){return n&&_defineProperties(t.prototype,n),e&&_defineProperties(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"+yQv":function(t,n,e){"use strict";e.r(n);var a,c,i,o,r,b,l,s,p=e("ofXK"),d=e("tyNb"),u=e("fXoL"),m=e("bTqV"),f=e("NFeN"),g=((a=function(){function t(n,e){_classCallCheck(this,t),this.router=n,this.route=e}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"buscarVentaFecha",value:function(t){this.router.navigate(["busquedaVentaFecha"],{relativeTo:this.route})}},{key:"buscarVentaMarca",value:function(t){this.router.navigate(["busquedaVentaMarca"],{relativeTo:this.route})}},{key:"buscarIngresoMes",value:function(t){this.router.navigate(["busquedaIngresoMe"],{relativeTo:this.route})}},{key:"buscarVentaCanal",value:function(t){this.router.navigate(["busquedaVentaCanal"],{relativeTo:this.route})}},{key:"buscarInventario",value:function(t){this.router.navigate(["busquedaInventario"],{relativeTo:this.route})}},{key:"buscarCliente",value:function(t){this.router.navigate(["buscarInventario"],{relativeTo:this.route})}}]),t}()).\u0275fac=function(t){return new(t||a)(u.Ob(d.c),u.Ob(d.a))},a.\u0275cmp=u.Ib({type:a,selectors:[["app-main"]],decls:19,vars:0,consts:[[1,"row","mb-5"],[1,"col-sm-6"],[1,"card"],[1,"card-body"],[1,"card-title"],["mat-raised-button","","color","primary",3,"click"]],template:function(t,n){1&t&&(u.Ub(0,"div",0),u.Ub(1,"div",1),u.Ub(2,"div",2),u.Ub(3,"div",3),u.Ub(4,"h1",4),u.Dc(5,"Reporte de ventas por fecha"),u.Tb(),u.Ub(6,"button",5),u.cc("click",(function(t){return n.buscarVentaFecha(t)})),u.Ub(7,"mat-icon"),u.Dc(8,"search"),u.Tb(),u.Dc(9,"Buscar "),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Ub(10,"div",1),u.Ub(11,"div",2),u.Ub(12,"div",3),u.Ub(13,"h1",4),u.Dc(14,"Reporte de ventas por marca"),u.Tb(),u.Ub(15,"button",5),u.cc("click",(function(t){return n.buscarVentaMarca(t)})),u.Ub(16,"mat-icon"),u.Dc(17,"search"),u.Tb(),u.Dc(18,"Buscar "),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb())},directives:[m.a,f.a],styles:["button[_ngcontent-%COMP%]{width:100%}h1[_ngcontent-%COMP%]{text-align:center}"]}),a),C=e("kmnG"),v=e("qFsG"),h=e("iadO"),P=e("f0Cb"),T=((c=function(){function t(n){_classCallCheck(this,t),this.location=n}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"cancel",value:function(t){this.location.back()}}]),t}()).\u0275fac=function(t){return new(t||c)(u.Ob(p.g))},c.\u0275cmp=u.Ib({type:c,selectors:[["app-venta-fecha"]],decls:32,vars:4,consts:[[1,"venta-fecha","mat-elevation-z8"],[1,"section-container"],[1,"input-list"],["matInput","",3,"matDatepicker"],["matSuffix","",3,"for"],["picker1",""],["picker2",""],[1,"actions"],["mat-flat-button","",3,"click"],["mat-raised-button","","color","warn"],["mat-raised-button","","color","primary"]],template:function(t,n){if(1&t&&(u.Ub(0,"div",0),u.Ub(1,"div",1),u.Ub(2,"h2"),u.Dc(3,"Reporte de ventas por fecha"),u.Tb(),u.Ub(4,"div",2),u.Ub(5,"mat-form-field"),u.Ub(6,"mat-label"),u.Dc(7,"Fecha desde"),u.Tb(),u.Pb(8,"input",3),u.Pb(9,"mat-datepicker-toggle",4),u.Pb(10,"mat-datepicker",null,5),u.Tb(),u.Ub(12,"mat-form-field"),u.Ub(13,"mat-label"),u.Dc(14,"Fecha hasta"),u.Tb(),u.Pb(15,"input",3),u.Pb(16,"mat-datepicker-toggle",4),u.Pb(17,"mat-datepicker",null,6),u.Tb(),u.Tb(),u.Tb(),u.Pb(19,"mat-divider"),u.Pb(20,"mat-divider"),u.Ub(21,"div",7),u.Ub(22,"button",8),u.cc("click",(function(t){return n.cancel(t)})),u.Dc(23,"Cancelar"),u.Tb(),u.Ub(24,"button",9),u.Ub(25,"mat-icon"),u.Dc(26,"delete"),u.Tb(),u.Dc(27,"Borrar"),u.Tb(),u.Ub(28,"button",10),u.Ub(29,"mat-icon"),u.Dc(30,"description"),u.Tb(),u.Dc(31,"Generar"),u.Tb(),u.Tb(),u.Tb()),2&t){var e=u.sc(11),a=u.sc(18);u.Cb(8),u.lc("matDatepicker",e),u.Cb(1),u.lc("for",e),u.Cb(6),u.lc("matDatepicker",a),u.Cb(1),u.lc("for",a)}},directives:[C.b,C.e,v.b,h.b,h.d,C.g,h.a,P.a,m.a,f.a],styles:[".venta-fecha[_ngcontent-%COMP%]{padding:20px}.section-container[_ngcontent-%COMP%]:not(:first-child){padding-top:20px}.section-container[_ngcontent-%COMP%]{padding-bottom:20px}.input-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.input-list[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{margin-right:20px;width:300px}.actions[_ngcontent-%COMP%]{padding-top:20px;display:flex;justify-content:flex-end}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:8px}@media screen and (max-width:600px){.actions[_ngcontent-%COMP%]{flex-wrap:wrap}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;margin-top:8px}}"]}),c),U=e("d3UM"),k=e("FKr1"),x=[{path:"",component:g},{path:"busquedaVentaFecha",component:T},{path:"busquedaVentaMarca",component:(l=function(){function t(n){_classCallCheck(this,t),this.location=n}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"cancel",value:function(t){this.location.back()}}]),t}(),l.\u0275fac=function(t){return new(t||l)(u.Ob(p.g))},l.\u0275cmp=u.Ib({type:l,selectors:[["app-venta-marca"]],decls:43,vars:4,consts:[[1,"venta-marca","mat-elevation-z8"],[1,"section-container"],["matInput","",3,"matDatepicker"],["matSuffix","",3,"for"],["picker1",""],["picker2",""],[1,"actions"],["mat-flat-button","",3,"click"],["mat-raised-button","","color","warn"],["mat-raised-button","","color","primary"]],template:function(t,n){if(1&t&&(u.Ub(0,"div",0),u.Ub(1,"div",1),u.Ub(2,"h2"),u.Dc(3,"Reporte de ventas por marca"),u.Tb(),u.Ub(4,"mat-form-field"),u.Ub(5,"mat-label"),u.Dc(6,"Fecha desde"),u.Tb(),u.Pb(7,"input",2),u.Pb(8,"mat-datepicker-toggle",3),u.Pb(9,"mat-datepicker",null,4),u.Tb(),u.Ub(11,"mat-form-field"),u.Ub(12,"mat-label"),u.Dc(13,"Fecha hasta"),u.Tb(),u.Pb(14,"input",2),u.Pb(15,"mat-datepicker-toggle",3),u.Pb(16,"mat-datepicker",null,5),u.Tb(),u.Ub(18,"mat-form-field"),u.Ub(19,"mat-label"),u.Dc(20,"Marca"),u.Tb(),u.Ub(21,"mat-select"),u.Ub(22,"mat-option"),u.Dc(23,"None"),u.Tb(),u.Tb(),u.Tb(),u.Ub(24,"mat-form-field"),u.Ub(25,"mat-label"),u.Dc(26,"Canal"),u.Tb(),u.Ub(27,"mat-select"),u.Ub(28,"mat-option"),u.Dc(29,"None"),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Pb(30,"mat-divider"),u.Pb(31,"mat-divider"),u.Ub(32,"div",6),u.Ub(33,"button",7),u.cc("click",(function(t){return n.cancel(t)})),u.Dc(34,"Cancelar"),u.Tb(),u.Ub(35,"button",8),u.Ub(36,"mat-icon"),u.Dc(37,"delete"),u.Tb(),u.Dc(38,"Borrar"),u.Tb(),u.Ub(39,"button",9),u.Ub(40,"mat-icon"),u.Dc(41,"description"),u.Tb(),u.Dc(42,"Generar"),u.Tb(),u.Tb(),u.Tb()),2&t){var e=u.sc(10),a=u.sc(17);u.Cb(7),u.lc("matDatepicker",e),u.Cb(1),u.lc("for",e),u.Cb(6),u.lc("matDatepicker",a),u.Cb(1),u.lc("for",a)}},directives:[C.b,C.e,v.b,h.b,h.d,C.g,h.a,U.a,k.k,P.a,m.a,f.a],styles:[".venta-marca[_ngcontent-%COMP%]{padding:20px}.section-container[_ngcontent-%COMP%]:not(:first-child){padding-top:20px}.section-container[_ngcontent-%COMP%]{padding-bottom:20px}.input-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.input-list[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{margin-right:20px;width:300px}.actions[_ngcontent-%COMP%]{padding-top:20px;display:flex;justify-content:flex-end}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:8px}@media screen and (max-width:600px){.actions[_ngcontent-%COMP%]{flex-wrap:wrap}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;margin-top:8px}}"]}),l)},{path:"busquedaIngresoMe",component:(b=function(){function t(n){_classCallCheck(this,t),this.location=n}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"cancel",value:function(t){this.location.back()}}]),t}(),b.\u0275fac=function(t){return new(t||b)(u.Ob(p.g))},b.\u0275cmp=u.Ib({type:b,selectors:[["app-ingreso-mes"]],decls:32,vars:4,consts:[[1,"ingreso-mes","mat-elevation-z8"],[1,"section-container"],[1,"input-list"],["matInput","",3,"matDatepicker"],["matSuffix","",3,"for"],["picker1",""],["picker2",""],[1,"actions"],["mat-flat-button","",3,"click"],["mat-raised-button","","color","warn"],["mat-raised-button","","color","primary"]],template:function(t,n){if(1&t&&(u.Ub(0,"div",0),u.Ub(1,"div",1),u.Ub(2,"h2"),u.Dc(3,"Reporte de ventas por marca"),u.Tb(),u.Ub(4,"div",2),u.Ub(5,"mat-form-field"),u.Ub(6,"mat-label"),u.Dc(7,"Fecha desde"),u.Tb(),u.Pb(8,"input",3),u.Pb(9,"mat-datepicker-toggle",4),u.Pb(10,"mat-datepicker",null,5),u.Tb(),u.Ub(12,"mat-form-field"),u.Ub(13,"mat-label"),u.Dc(14,"Fecha hasta"),u.Tb(),u.Pb(15,"input",3),u.Pb(16,"mat-datepicker-toggle",4),u.Pb(17,"mat-datepicker",null,6),u.Tb(),u.Tb(),u.Tb(),u.Pb(19,"mat-divider"),u.Pb(20,"mat-divider"),u.Ub(21,"div",7),u.Ub(22,"button",8),u.cc("click",(function(t){return n.cancel(t)})),u.Dc(23,"Cancelar"),u.Tb(),u.Ub(24,"button",9),u.Ub(25,"mat-icon"),u.Dc(26,"delete"),u.Tb(),u.Dc(27,"Borrar"),u.Tb(),u.Ub(28,"button",10),u.Ub(29,"mat-icon"),u.Dc(30,"description"),u.Tb(),u.Dc(31,"Generar"),u.Tb(),u.Tb(),u.Tb()),2&t){var e=u.sc(11),a=u.sc(18);u.Cb(8),u.lc("matDatepicker",e),u.Cb(1),u.lc("for",e),u.Cb(6),u.lc("matDatepicker",a),u.Cb(1),u.lc("for",a)}},directives:[C.b,C.e,v.b,h.b,h.d,C.g,h.a,P.a,m.a,f.a],styles:[".ingreso-mes[_ngcontent-%COMP%]{padding:20px}.section-container[_ngcontent-%COMP%]:not(:first-child){padding-top:20px}.section-container[_ngcontent-%COMP%]{padding-bottom:20px}.input-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.input-list[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{margin-right:20px;width:300px}.actions[_ngcontent-%COMP%]{padding-top:20px;display:flex;justify-content:flex-end}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:8px}@media screen and (max-width:600px){.actions[_ngcontent-%COMP%]{flex-wrap:wrap}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;margin-top:8px}}"]}),b)},{path:"busquedaVentaCanal",component:(r=function(){function t(n){_classCallCheck(this,t),this.location=n}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"cancel",value:function(t){this.location.back()}}]),t}(),r.\u0275fac=function(t){return new(t||r)(u.Ob(p.g))},r.\u0275cmp=u.Ib({type:r,selectors:[["app-venta-canal"]],decls:44,vars:4,consts:[[1,"venta-canal","mat-elevation-z8"],[1,"section-container"],[1,"input-list"],["matInput","",3,"matDatepicker"],["matSuffix","",3,"for"],["picker1",""],["picker2",""],[1,"actions"],["mat-flat-button","",3,"click"],["mat-raised-button","","color","warn"],["mat-raised-button","","color","primary"]],template:function(t,n){if(1&t&&(u.Ub(0,"div",0),u.Ub(1,"div",1),u.Ub(2,"h2"),u.Dc(3,"Reporte de ventas por marca"),u.Tb(),u.Ub(4,"div",2),u.Ub(5,"mat-form-field"),u.Ub(6,"mat-label"),u.Dc(7,"Fecha desde"),u.Tb(),u.Pb(8,"input",3),u.Pb(9,"mat-datepicker-toggle",4),u.Pb(10,"mat-datepicker",null,5),u.Tb(),u.Ub(12,"mat-form-field"),u.Ub(13,"mat-label"),u.Dc(14,"Fecha hasta"),u.Tb(),u.Pb(15,"input",3),u.Pb(16,"mat-datepicker-toggle",4),u.Pb(17,"mat-datepicker",null,6),u.Tb(),u.Ub(19,"mat-form-field"),u.Ub(20,"mat-label"),u.Dc(21,"Marca"),u.Tb(),u.Ub(22,"mat-select"),u.Ub(23,"mat-option"),u.Dc(24,"None"),u.Tb(),u.Tb(),u.Tb(),u.Ub(25,"mat-form-field"),u.Ub(26,"mat-label"),u.Dc(27,"Canal"),u.Tb(),u.Ub(28,"mat-select"),u.Ub(29,"mat-option"),u.Dc(30,"None"),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Pb(31,"mat-divider"),u.Pb(32,"mat-divider"),u.Ub(33,"div",7),u.Ub(34,"button",8),u.cc("click",(function(t){return n.cancel(t)})),u.Dc(35,"Cancelar"),u.Tb(),u.Ub(36,"button",9),u.Ub(37,"mat-icon"),u.Dc(38,"delete"),u.Tb(),u.Dc(39,"Borrar "),u.Tb(),u.Ub(40,"button",10),u.Ub(41,"mat-icon"),u.Dc(42,"description"),u.Tb(),u.Dc(43,"Generar "),u.Tb(),u.Tb(),u.Tb()),2&t){var e=u.sc(11),a=u.sc(18);u.Cb(8),u.lc("matDatepicker",e),u.Cb(1),u.lc("for",e),u.Cb(6),u.lc("matDatepicker",a),u.Cb(1),u.lc("for",a)}},directives:[C.b,C.e,v.b,h.b,h.d,C.g,h.a,U.a,k.k,P.a,m.a,f.a],styles:[".venta-canal[_ngcontent-%COMP%]{padding:20px}.section-container[_ngcontent-%COMP%]:not(:first-child){padding-top:20px}.section-container[_ngcontent-%COMP%]{padding-bottom:20px}.input-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.input-list[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{margin-right:20px;width:300px}.actions[_ngcontent-%COMP%]{padding-top:20px;display:flex;justify-content:flex-end}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:8px}@media screen and (max-width:600px){.actions[_ngcontent-%COMP%]{flex-wrap:wrap}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;margin-top:8px}}"]}),r)},{path:"busquedaInventario",component:(o=function(){function t(n){_classCallCheck(this,t),this.location=n}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"cancel",value:function(t){this.location.back()}}]),t}(),o.\u0275fac=function(t){return new(t||o)(u.Ob(p.g))},o.\u0275cmp=u.Ib({type:o,selectors:[["app-inventario"]],decls:32,vars:4,consts:[[1,"busca-inventario","mat-elevation-z8"],[1,"section-container"],[1,"input-list"],["matInput","",3,"matDatepicker"],["matSuffix","",3,"for"],["picker1",""],["picker2",""],[1,"actions"],["mat-flat-button","",3,"click"],["mat-raised-button","","color","warn"],["mat-raised-button","","color","primary"]],template:function(t,n){if(1&t&&(u.Ub(0,"div",0),u.Ub(1,"div",1),u.Ub(2,"h2"),u.Dc(3,"Reporte de ventas por marca"),u.Tb(),u.Ub(4,"div",2),u.Ub(5,"mat-form-field"),u.Ub(6,"mat-label"),u.Dc(7,"Fecha desde"),u.Tb(),u.Pb(8,"input",3),u.Pb(9,"mat-datepicker-toggle",4),u.Pb(10,"mat-datepicker",null,5),u.Tb(),u.Ub(12,"mat-form-field"),u.Ub(13,"mat-label"),u.Dc(14,"Fecha hasta"),u.Tb(),u.Pb(15,"input",3),u.Pb(16,"mat-datepicker-toggle",4),u.Pb(17,"mat-datepicker",null,6),u.Tb(),u.Tb(),u.Tb(),u.Pb(19,"mat-divider"),u.Pb(20,"mat-divider"),u.Ub(21,"div",7),u.Ub(22,"button",8),u.cc("click",(function(t){return n.cancel(t)})),u.Dc(23,"Cancelar"),u.Tb(),u.Ub(24,"button",9),u.Ub(25,"mat-icon"),u.Dc(26,"delete"),u.Tb(),u.Dc(27,"Borrar"),u.Tb(),u.Ub(28,"button",10),u.Ub(29,"mat-icon"),u.Dc(30,"description"),u.Tb(),u.Dc(31,"Generar"),u.Tb(),u.Tb(),u.Tb()),2&t){var e=u.sc(11),a=u.sc(18);u.Cb(8),u.lc("matDatepicker",e),u.Cb(1),u.lc("for",e),u.Cb(6),u.lc("matDatepicker",a),u.Cb(1),u.lc("for",a)}},directives:[C.b,C.e,v.b,h.b,h.d,C.g,h.a,P.a,m.a,f.a],styles:[".busca-inventario[_ngcontent-%COMP%]{padding:20px}.section-container[_ngcontent-%COMP%]:not(:first-child){padding-top:20px}.section-container[_ngcontent-%COMP%]{padding-bottom:20px}.input-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.input-list[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{margin-right:20px;width:300px}.actions[_ngcontent-%COMP%]{padding-top:20px;display:flex;justify-content:flex-end}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:8px}@media screen and (max-width:600px){.actions[_ngcontent-%COMP%]{flex-wrap:wrap}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;margin-top:8px}}"]}),o)},{path:"buscarInventario",component:(i=function(){function t(n){_classCallCheck(this,t),this.location=n}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"cancel",value:function(t){this.location.back()}}]),t}(),i.\u0275fac=function(t){return new(t||i)(u.Ob(p.g))},i.\u0275cmp=u.Ib({type:i,selectors:[["app-cliente"]],decls:32,vars:4,consts:[[1,"busca-cliente","mat-elevation-z8"],[1,"section-container"],[1,"input-list"],["matInput","",3,"matDatepicker"],["matSuffix","",3,"for"],["picker1",""],["picker2",""],[1,"actions"],["mat-flat-button","",3,"click"],["mat-raised-button","","color","warn"],["mat-raised-button","","color","primary"]],template:function(t,n){if(1&t&&(u.Ub(0,"div",0),u.Ub(1,"div",1),u.Ub(2,"h2"),u.Dc(3,"Reporte de ventas por fecha"),u.Tb(),u.Ub(4,"div",2),u.Ub(5,"mat-form-field"),u.Ub(6,"mat-label"),u.Dc(7,"Fecha desde"),u.Tb(),u.Pb(8,"input",3),u.Pb(9,"mat-datepicker-toggle",4),u.Pb(10,"mat-datepicker",null,5),u.Tb(),u.Ub(12,"mat-form-field"),u.Ub(13,"mat-label"),u.Dc(14,"Fecha hasta"),u.Tb(),u.Pb(15,"input",3),u.Pb(16,"mat-datepicker-toggle",4),u.Pb(17,"mat-datepicker",null,6),u.Tb(),u.Tb(),u.Tb(),u.Pb(19,"mat-divider"),u.Pb(20,"mat-divider"),u.Ub(21,"div",7),u.Ub(22,"button",8),u.cc("click",(function(t){return n.cancel(t)})),u.Dc(23,"Cancelar"),u.Tb(),u.Ub(24,"button",9),u.Ub(25,"mat-icon"),u.Dc(26,"delete"),u.Tb(),u.Dc(27,"Borrar"),u.Tb(),u.Ub(28,"button",10),u.Ub(29,"mat-icon"),u.Dc(30,"description"),u.Tb(),u.Dc(31,"Generar"),u.Tb(),u.Tb(),u.Tb()),2&t){var e=u.sc(11),a=u.sc(18);u.Cb(8),u.lc("matDatepicker",e),u.Cb(1),u.lc("for",e),u.Cb(6),u.lc("matDatepicker",a),u.Cb(1),u.lc("for",a)}},directives:[C.b,C.e,v.b,h.b,h.d,C.g,h.a,P.a,m.a,f.a],styles:[".busca-cliente[_ngcontent-%COMP%]{padding:20px}.section-container[_ngcontent-%COMP%]:not(:first-child){padding-top:20px}.section-container[_ngcontent-%COMP%]{padding-bottom:20px}.input-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.input-list[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{margin-right:20px;width:300px}.actions[_ngcontent-%COMP%]{padding-top:20px;display:flex;justify-content:flex-end}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:8px}@media screen and (max-width:600px){.actions[_ngcontent-%COMP%]{flex-wrap:wrap}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;margin-top:8px}}"]}),i)}],_=((s=function t(){_classCallCheck(this,t)}).\u0275mod=u.Mb({type:s}),s.\u0275inj=u.Lb({factory:function(t){return new(t||s)},imports:[[d.e.forChild(x)],d.e]}),s),O=e("hctd");e.d(n,"ReportesModule",(function(){return D}));var M,D=((M=function t(){_classCallCheck(this,t)}).\u0275mod=u.Mb({type:M}),M.\u0275inj=u.Lb({factory:function(t){return new(t||M)},imports:[[p.c,_,O.a]]}),M)}}]);
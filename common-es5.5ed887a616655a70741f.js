function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,n){for(var c=0;c<n.length;c++){var e=n[c];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function _createClass(t,n,c){return n&&_defineProperties(t.prototype,n),c&&_defineProperties(t,c),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{Dz8P:function(t,n,c){"use strict";c.d(n,"a",(function(){return i}));var e=c("aR35"),a=c("fXoL"),o=c("tk/3"),i=function(){var t=function(){function t(n,c){_classCallCheck(this,t),this.httpClient=n,this.config=c}return _createClass(t,[{key:"getMarcas",value:function(){return this.httpClient.get("".concat(this.config.api,"/Canal/GetMarca"))}}]),t}();return t.\u0275fac=function(n){return new(n||t)(a.ac(o.a),a.ac(e.a))},t.\u0275prov=a.Mb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},GPUG:function(t,n,c){"use strict";c.d(n,"a",(function(){return i}));var e=c("aR35"),a=c("fXoL"),o=c("tk/3"),i=function(){var t=function(){function t(n,c){_classCallCheck(this,t),this.httpClient=n,this.config=c}return _createClass(t,[{key:"getCatalog",value:function(){return this.httpClient.get("".concat(this.config.api,"/Producto/GetProducto"))}},{key:"getProductos",value:function(t){return this.httpClient.get("".concat(this.config.api,"/Producto/GetProductoByParams?parametros=").concat(t))}},{key:"getProductoDetalle",value:function(t){return this.httpClient.get("".concat(this.config.api,"/Producto/GetProductoByid?ID_PRODUCTO=").concat(t))}},{key:"getTipoProducto",value:function(){return this.httpClient.get("".concat(this.config.api,"/Tipoproducto/GetTipoproducto"))}},{key:"delete",value:function(t){return this.httpClient.delete("".concat(this.config.api,"/Producto/DeleteProducto?ID_PRODUCTO=").concat(t))}},{key:"crearProducto",value:function(t,n,c,e,a,o,i,r,u,C){return this.httpClient.post("".concat(this.config.api,"/Producto/PostProducto?ID_TIPO_PRODUCTO=").concat(t,"&ID_MARCA=").concat(n,"&ID_UNIDAD_VENTA=1&PRO_CODIGO_FABRICA=").concat(c,"&PRO_CODIGO_SUNAT=").concat(e,"&PRO_DESCRIPCION=").concat(a,"&PRO_ENLACE_RRSS1=").concat(o,"&PRO_ENLACE_RRSS2=").concat(i,"&PRO_PRECIO=").concat(r,"&PRO_STOCK=").concat(u,"&PRO_IMAGEN=").concat(C),{})}},{key:"updateProducto",value:function(t,n,c,e,a,o,i,r,u,C,s){return this.httpClient.put("".concat(this.config.api,"/Producto/PutProducto?ID_PRODUCTO=").concat(t,"&ID_TIPO_PRODUCTO=").concat(n,"&ID_MARCA=").concat(c,"&PRO_CODIGO_FABRICA=").concat(e,"&PRO_CODIGO_SUNAT=").concat(a,"&PRO_DESCRIPCION=").concat(o,"&PRO_ENLACE_RRSS1=").concat(i,"&PRO_ENLACE_RRSS2=").concat(r,"&PRO_PRECIO=").concat(u,"&PRO_STOCK=").concat(C,"&PRO_IMAGEN=").concat(s),{})}}]),t}();return t.\u0275fac=function(n){return new(n||t)(a.ac(o.a),a.ac(e.a))},t.\u0275prov=a.Mb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},TgOq:function(t,n,c){"use strict";c.d(n,"a",(function(){return i}));var e=c("aR35"),a=c("fXoL"),o=c("tk/3"),i=function(){var t=function(){function t(n,c){_classCallCheck(this,t),this.httpClient=n,this.config=c}return _createClass(t,[{key:"getVentaParams",value:function(t,n,c,e,a,o){return this.httpClient.get("".concat(this.config.api,"/Venta/GetVentaByParams?estado=").concat(t,"&nombre=").concat(n,"&nuDocumento=").concat(c,"&idCanal=").concat(e,"&fechaDesdeVenta=").concat(a,"&fechaHastaVenta=").concat(o))}},{key:"getVentas",value:function(){return this.httpClient.get("".concat(this.config.api,"/Venta/GetVenta"))}},{key:"save",value:function(t){return this.httpClient.post("".concat(this.config.api,"/Venta/PostVenta"),t)}},{key:"delete",value:function(t){return this.httpClient.delete("".concat(this.config.api,"/Venta/DeleteVenta?ID_VENTA=").concat(t))}},{key:"getVentaMarcaCanal",value:function(t,n){return this.httpClient.get("".concat(this.config.api,"/Venta/GetVentaByVentaxMarcaxCanal?marca=").concat(t,"&canal=").concat(n))}}]),t}();return t.\u0275fac=function(n){return new(n||t)(a.ac(o.a),a.ac(e.a))},t.\u0275prov=a.Mb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},lF0S:function(t,n,c){"use strict";c.d(n,"a",(function(){return i}));var e=c("aR35"),a=c("fXoL"),o=c("tk/3"),i=function(){var t=function(){function t(n,c){_classCallCheck(this,t),this.httpClient=n,this.config=c}return _createClass(t,[{key:"getCanales",value:function(){return this.httpClient.get("".concat(this.config.api,"/Canal/GetCanal"))}}]),t}();return t.\u0275fac=function(n){return new(n||t)(a.ac(o.a),a.ac(e.a))},t.\u0275prov=a.Mb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},pQRH:function(t,n,c){"use strict";c.d(n,"a",(function(){return i}));var e=c("aR35"),a=c("fXoL"),o=c("tk/3"),i=function(){var t=function(){function t(n,c){_classCallCheck(this,t),this.httpClient=n,this.config=c}return _createClass(t,[{key:"getTipoDoc",value:function(){return this.httpClient.get("".concat(this.config.api,"/Tipodoc/GetTipoDocumento"))}}]),t}();return t.\u0275fac=function(n){return new(n||t)(a.ac(o.a),a.ac(e.a))},t.\u0275prov=a.Mb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},qfBg:function(t,n,c){"use strict";c.d(n,"a",(function(){return i}));var e=c("aR35"),a=c("fXoL"),o=c("tk/3"),i=function(){var t=function(){function t(n,c){_classCallCheck(this,t),this.httpClient=n,this.config=c}return _createClass(t,[{key:"getUsers",value:function(){return this.httpClient.get("".concat(this.config.api,"/User/GetListUser"))}},{key:"getUser",value:function(t){return this.httpClient.get("".concat(this.config.api,"/User/GetUsuarioByid?ID_USUARIO=").concat(t))}},{key:"getUsuarioParams",value:function(t,n){return this.httpClient.get("".concat(this.config.api,"/User/GetUsuarioByParams?nombre=").concat(t,"&nuDocumento=").concat(n))}},{key:"delete",value:function(t){return this.httpClient.delete("".concat(this.config.api,"/User/Deleteusuario?ID_USUARIO=").concat(t))}},{key:"update",value:function(t,n,c,e,a,o,i,r,u,C,s,l){return this.httpClient.put("".concat(this.config.api,"/User/Putusuario?ID_USUARIO=").concat(t,"&ID_CARGO=").concat(n,"&ID_PERFIL=").concat(c,"&ID_TIPO_DOCUMENTO=").concat(e,"&USU_NU_DOCUMENTO=").concat(a,"&USU_NU_TELEFONO=").concat(o,"&USU_NOMBRE=").concat(i,"&USU_APELLIDO=").concat(r,"&USU_CORREO=").concat(u,"&USU_CUMPLEA\xd1OS=").concat(C,"&USU_USUARIO=").concat(s,"&USU_CONTRASE\xd1A=").concat(l),{})}},{key:"registrar",value:function(t,n,c,e,a,o,i,r,u,C,s){return this.httpClient.post("".concat(this.config.api,"/User/Postusuario?ID_CARGO=").concat(t,"&ID_PERFIL=").concat(n,"&ID_TIPO_DOCUMENTO=").concat(c,"&USU_NU_DOCUMENTO=").concat(e,"&USU_NU_TELEFONO=").concat(a,"&USU_NOMBRE=").concat(o,"&USU_APELLIDO=").concat(i,"&USU_CORREO=").concat(r,"&USU_CUMPLEA\xd1OS=").concat(u,"&USU_USUARIO=").concat(C,"&USU_CONTRASE\xd1A=").concat(s),{})}}]),t}();return t.\u0275fac=function(n){return new(n||t)(a.ac(o.a),a.ac(e.a))},t.\u0275prov=a.Mb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},teE5:function(t,n,c){"use strict";c.d(n,"a",(function(){return i}));var e=c("aR35"),a=c("fXoL"),o=c("tk/3"),i=function(){var t=function(){function t(n,c){_classCallCheck(this,t),this.httpClient=n,this.config=c}return _createClass(t,[{key:"getCliente",value:function(t){return this.httpClient.get("".concat(this.config.api,"/Cliente/GetClienteByDNI?dniCliente=").concat(t))}},{key:"getClienteByParams",value:function(t,n,c){return this.httpClient.get("".concat(this.config.api,"/Cliente/GetClienteByParams?nombre=").concat(t,"&documento=").concat(n,"&estado=").concat(c))}},{key:"delete",value:function(t){return this.httpClient.delete("".concat(this.config.api,"/Cliente/DeleteCliente?ID_CLIENTE=").concat(t))}},{key:"getTipoCliente",value:function(){return this.httpClient.get("".concat(this.config.api,"/TipoCliente/GetTipocliente"))}},{key:"crear",value:function(t,n,c,e,a,o,i,r,u,C,s,l,f){return this.httpClient.post("".concat(this.config.api,"/Cliente/PostCliente?ID_TIPO_DOCUMENTO=").concat(t,"&ID_CANAL_PRINCIPAL=").concat(n,"&ID_CATEGORIA=").concat(c,"&ID_TIPO_CLIENTE=").concat(e,"&CLI_NU_DOCUMENTO=").concat(a,"&CLI_NU_TELEFONO=").concat(o,"&CLI_NOMBRE=").concat(i,"&CLI_APELLIDO=").concat(r,"&CLI_CORREO=").concat(u,"&CLI_CUMPLEA\xd1OS=").concat(C,"&CLI_DIRECCION=").concat(s,"&CLI_ENLACE_RRSS1=").concat(l,"&CLI_ENLACE_RRSS2=").concat(f),{})}},{key:"contacto",value:function(t,n,c,e){return this.httpClient.post("".concat(this.config.api,"/Cliente/PostContacto?CONTAC_NOMBRE=").concat(t,"&CONTAC_APELLIDO=").concat(n,"&CONTAC_CORREO=").concat(c,"&CONTAC_COMENTARIO=").concat(e),{})}},{key:"getClienteById",value:function(t){return this.httpClient.get("".concat(this.config.api,"/Cliente/GetClienteById?idCliente=").concat(t))}},{key:"updateCliente",value:function(t,n,c,e,a,o,i,r,u,C,s,l,f,_){return this.httpClient.put("".concat(this.config.api,"/Cliente/PutCliente?ID_CLIENTE=").concat(t,"&ID_TIPO_DOCUMENTO=").concat(n,"&ID_CANAL_PRINCIPAL=").concat(c,"&ID_CATEGORIA=").concat(e,"&ID_TIPO_CLIENTE=").concat(a,"&CLI_NU_DOCUMENTO=").concat(o,"&CLI_NU_TELEFONO=").concat(i,"&CLI_NOMBRE=").concat(r,"&CLI_APELLIDO=").concat(u,"&CLI_CORREO=").concat(C,"&CLI_CUMPLEA\xd1OS=").concat(s,"&CLI_DIRECCION=").concat(l,"&CLI_ENLACE_RRSS1=").concat(f,"&CLI_ENLACE_RRSS2=").concat(_),{})}}]),t}();return t.\u0275fac=function(n){return new(n||t)(a.ac(o.a),a.ac(e.a))},t.\u0275prov=a.Mb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()}}]);
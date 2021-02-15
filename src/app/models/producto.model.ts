export interface Producto {
  codigo: number;
  descripcion: string;
  tipo: string;
  marca: string;
  stock: number;
  precio: number;
  imagen: string;
}

export interface ProductoDetalle {
  iD_PRODUCTO: number;
  iD_TIPO_PRODUCTO: number;
  iD_MARCA: number;
  maR_NOMBRE_MARCA: string;
  iD_UNIDAD_VENTA: number;
  prO_CODIGO_FABRICA: string;
  prO_CODIGO_SUNAT: string;
  prO_DESCRIPCION: string;
  prO_ENLACE_RRSS1: string;
  prO_ENLACE_RRSS2: string;
  prO_PRECIO: number;
  prO_STOCK: number;
  prO_IMAGEN: string;
}

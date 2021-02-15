import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../../../models/producto.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() products: Producto[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  imgpath = `./assets/img/productos/lent${this.getRandomInt(10)}.jpg`;
  constructor() { }

  ngOnInit(): void {
  }
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
}

import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product'
import { Input } from '@angular/core';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input('product') data: Product;

  constructor() { }

  ngOnInit() {
  }

}

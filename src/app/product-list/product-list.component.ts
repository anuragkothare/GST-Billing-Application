import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product'
import {ProductService} from '../product.service'

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public productList: Product[]

  constructor(public ProductService: ProductService) { }

  ngOnInit() {
    this.productList = []

    this.ProductService.getAllProducts().subscribe(
      (data: Product[]) => {
        data.forEach((product) => {
          this.productList.push(product)
        })
        console.log(this.productList[0].product_name)
      },
      error => {
        console.log("some error occured")
        console.log(error)
      }
    )
  }

}

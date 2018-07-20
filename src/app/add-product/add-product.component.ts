import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { Product } from './../product/product';

import { switchMap } from "rxjs/operators";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ProductService: ProductService
  ) { }

  ngOnInit() {

  }

  public addNewProduct(productCode: number, productName: String, productPrice:number, productGST:number){
    console.log("Add info "+ productCode + " " + productName + " "+ productPrice + " "+ productGST)
    var product: Product = new Product(productCode, productName, productPrice, productGST)

    this.ProductService.addProduct(product)
    console.log(product)
  }
}

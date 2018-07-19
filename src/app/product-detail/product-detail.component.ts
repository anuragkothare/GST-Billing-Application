import { ProductService } from './../product.service';
import { Product } from './../product/product';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap } from "rxjs/operators";


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  public currentProduct: Product;
  public samplePlace: String = 'TEst '
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ProductService: ProductService
  ) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.ProductService.getProduct(parseInt(params.get("product_code")))
      )
    ).subscribe((data:Product)=>{
      this.currentProduct = data;
    });
  }

  public editProductInfo(productName: String, productPrice:number, productGST:number){
    console.log("Edit info "+ productName + " "+ productPrice + " "+ productGST)
    this.currentProduct.product_name = productName
    this.currentProduct.product_price = productPrice
    this.currentProduct.product_gst = productGST
    this.ProductService.updateProduct(this.currentProduct)

  }
}


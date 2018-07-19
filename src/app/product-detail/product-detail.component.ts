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

  public currentProduct$: Observable<Product>

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ProductService: ProductService
  ) { }

  ngOnInit() {
    this.currentProduct$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.ProductService.getProduct(parseInt(params.get("product_code")))
      )
    );
  }

}

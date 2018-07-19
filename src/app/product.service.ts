import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public productList: Product[];
  constructor() {
  }

  public getAllProducts() {
    return Observable.create(function(observer) {
      var product1 = new Product(12, 'Chair', 34, 59)
      var product2 = new Product(1, 'Match', 34, 46)
      var product3 = new Product(2, 'Bag', 45, 56)
      this.productList = []
      this.productList.push(product1)
      this.productList.push(product2)
      this.productList.push(product3)
      observer.next(this.productList)
      console.log(this.productList)
    });
  }

  public getProduct(id:number): Observable<Product>{
    for(var product of this.productList) {
      if(product.product_code === id) {
        return Observable.create(function(observer) {
          observer.next(product)
          console.log(product)
        });
      }
    }
  }

  public updateProduct(product: Product){
    var id:number= product.product_code
    //
    for(var p of this.productList) {
      if(id === p.product_code) {
        var index = this.productList.indexOf(p)
        this.productList[index] = p
      }
    }
  }

  public addProduct(product: Product){
    //validation if product exist or not
    this.productList.push(product)
  }

}




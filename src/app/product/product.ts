export class Product {

  constructor(public product_code: number, public product_name: String, public product_price: number, public product_gst: number ) {
    this.product_code = product_code
    this.product_name = product_name
    this.product_price = product_price
    this.product_gst = product_gst
  }
}

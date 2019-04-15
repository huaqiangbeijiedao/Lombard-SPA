import { Component, OnInit } from '@angular/core';
import { Product } from "src/app/Models/Product";
import { ProductService } from 'src/services/ProductService';



@Component({
  selector: 'app-updateProduct',
  templateUrl: './updateProduct.component.html',
  styleUrls: ['./updateProduct.component.css']
})
export class UpdateProductComponent  {
newProduct: Product = <Product>{};
  constructor(private ProductService: ProductService) { }

  public updateProduct() {
    this.ProductService
    .updateProduct(this.newProduct)
    .subscribe(x=>x);
  }

}

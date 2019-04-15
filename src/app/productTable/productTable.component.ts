import { Component, OnInit } from '@angular/core';
import {ProductService} from 'src/services/ProductService'
import { Product } from "src/app/Models/Product";
@Component({
  selector: 'app-productTable',
  templateUrl: './productTable.component.html',
  styleUrls: ['./productTable.component.css']
})
export class ProductTableComponent implements OnInit {
products: Product[] = [];
  constructor(private productservice: ProductService) { }

  ngOnInit() {
    this.productservice
    .getAll()
    .subscribe(x => this.products = x);
  }

}

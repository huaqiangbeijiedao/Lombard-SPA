import { Component, OnInit, Input } from '@angular/core';
import {ProductService} from 'src/services/ProductService'
import { Product } from "src/app/Models/Product";

@Component({
  selector: 'app-productTable',
  templateUrl: './productTable.component.html',
  styleUrls: ['./productTable.component.css']
})
export class ProductTableComponent implements OnInit {
@Input() products: Product[] = [];
@Input() haveproducts: boolean;
  constructor(private productservice: ProductService) { }

  ngOnInit() {
    if (!this.haveproducts)
    this.productservice
    .getAll()
    .subscribe(x => this.products = x);
  }

}

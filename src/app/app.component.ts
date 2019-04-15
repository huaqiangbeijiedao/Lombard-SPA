import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { ProductService } from 'src/services/ProductService';
import { Product } from './Models/Product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Lombard-SPA';
  Products : Product[]
  constructor(private api : ProductService){}

  ngOnInit(){
    this.api.getAll().subscribe(x => this.Products = x);
    console.log(this.Products);
  }
}

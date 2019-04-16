import { Component, OnInit } from '@angular/core';
import { RaportService } from "src/services/RaportService";
import { Product } from "src/app/Models/Product";

@Component({
  selector: 'app-Outage',
  templateUrl: './Outage.component.html',
  styleUrls: ['./Outage.component.css']
})
export class OutageComponent {
  products: Product[] = [];
  quantity: number;
  
  constructor(private Api: RaportService) { }

  display() {
    this.Api
      .getOutage(this.quantity)
      .subscribe(x => {
        this.products = x;
        console.log(this.products);
      });
  }
}

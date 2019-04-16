import { Component, OnInit, Input } from '@angular/core';
import { ProductHistory } from 'src/app/Models/ProductHistory';
@Component({
  selector: 'app-productHistory',
  templateUrl: './productHistory.component.html',
  styleUrls: ['./productHistory.component.css']
})
export class ProductHistoryComponent  {

    @Input() productHis : ProductHistory;
  
  }

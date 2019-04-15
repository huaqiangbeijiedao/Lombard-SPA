import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from 'src/app/Models/Transaction';

@Component({
  selector: 'app-Transaction',
  templateUrl: './Transaction.component.html',
  styleUrls: ['./Transaction.component.css']
})
export class TransactionComponent {

  @Input() transaction : Transaction;
  
}

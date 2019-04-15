import { Component, OnInit } from '@angular/core';
import { Transaction } from '../Models/Transaction';
import { TransactionService } from 'src/services/TransactionService';

@Component({
  selector: 'app-TransactionTable',
  templateUrl: './TransactionTable.component.html',
  styleUrls: ['./TransactionTable.component.css']
})
export class TransactionTableComponent implements OnInit {
  transactions: Transaction[] = [];
  constructor(private transactionservice: TransactionService) { }

  ngOnInit() {
    this.transactionservice
    .getAll()
    .subscribe(x => this.transactions = x);
  }

}
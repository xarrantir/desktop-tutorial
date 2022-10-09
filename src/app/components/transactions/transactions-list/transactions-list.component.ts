import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/models/transaction.model';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-transactions-list',
 templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.css']
})
export class TransactionsListComponent implements OnInit {

  transactions: Transaction[] = [];
  constructor(private transactionsService: TransactionsService) { }

  ngOnInit(): void {
   this.transactionsService.getAllTransactions()
   .subscribe({
      next:(transactions) => {
        this. transactions = transactions;
      },
      })
  }
}

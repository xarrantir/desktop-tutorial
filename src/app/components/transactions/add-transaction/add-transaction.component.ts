import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transaction } from 'src/app/models/transaction.model';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent implements OnInit {


  addTransactionRequest: Transaction = {
    id: '',
    carId:0,
    cost:0,
    payMethod:''
  }
  constructor(private transactionService:TransactionsService, private router: Router) { }

  ngOnInit(): void {
  }

addTransaction()
{
this.transactionService.addTransaction(this.addTransactionRequest)
.subscribe(
  {
    next: (transaction) => {
      this.router.navigate(['transactions']);
    }
  }
)
}

}



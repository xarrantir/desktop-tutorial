import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Transaction } from 'src/app/models/transaction.model';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-edit-transaction',
  templateUrl: './edit-transaction.component.html',
  styleUrls: ['./edit-transaction.component.css']
})
export class EditTransactionComponent implements OnInit {

  transactionDetails: Transaction = 
  {
    id: '',
    carId:0,
    cost:0,
    payMethod:''
  }
  constructor(private route:ActivatedRoute, private transactionService:
    TransactionsService, private router: Router) { }

  ngOnInit(): void {
this.route.paramMap.subscribe({
  next: (params) => {
    const id = params.get('id');


    if (id) {
      this.transactionService.getTransaction(id)
      .subscribe({
          next:(response) => 
          {
            this.transactionDetails = response;
          }
        })
    }
  }
})
}

updateTransaction ()
{
  this.transactionService.updateTransaction(this.transactionDetails.id, this.transactionDetails)
  .subscribe ({
    next:(response) => {
      this.router.navigate(['transactions']);
    }
  })
}


deleteTransaction (id:string)
{
  this.transactionService.deleteTransaction(id)
  .subscribe ({
    next:(response) => {
      this.router.navigate(['transactions']);
    }
  })
}

}

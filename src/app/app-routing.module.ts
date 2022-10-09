import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTransactionComponent } from './components/transactions/add-transaction/add-transaction.component';
import { EditTransactionComponent } from './components/transactions/edit-transaction/edit-transaction.component';
import { TransactionsListComponent } from './components/transactions/transactions-list/transactions-list.component';

const routes: Routes = [
  {
    path: '',
    component: TransactionsListComponent
  },
  {
    path: 'transactions',
    component: TransactionsListComponent
  },
  {
    path: 'transactions/add',
    component: AddTransactionComponent
  },
  {
    path: 'transactions/edit/:id',
    component: EditTransactionComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

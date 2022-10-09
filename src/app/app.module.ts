import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionsListComponent } from './components/transactions/transactions-list/transactions-list.component';
import { AddTransactionComponent } from './components/transactions/add-transaction/add-transaction.component';
import { FormsModule } from '@angular/forms';
import { EditTransactionComponent } from './components/transactions/edit-transaction/edit-transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactionsListComponent,
    AddTransactionComponent,
    EditTransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

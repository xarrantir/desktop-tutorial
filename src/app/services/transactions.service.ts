import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Transaction } from '../models/transaction.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  getAllTransactions(): Observable<Transaction[]>
    {
    return this.http.get<Transaction[]>(this.baseApiUrl + '/api/Transactions');
  }


  addTransaction(addTransactionRequest:Transaction): Observable<Transaction> {
    addTransactionRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Transaction>(this.baseApiUrl+ '/api/transactions', 
    addTransactionRequest);
  }


  getTransaction(id:string): Observable<Transaction>
  {
   return this.http.get<Transaction>(this.baseApiUrl + '/api/transactions/'+ id);
  }

  updateTransaction(id:string, updateTransactionRequest: Transaction):
Observable<Transaction>
{
return this.http.put<Transaction>(this.baseApiUrl + '/api/transactions/'+id, updateTransactionRequest);
}

deleteTransaction(id:string):Observable<Transaction>
{
return this.http.delete<Transaction>(this.baseApiUrl + '/api/transactions/'+id);
}


}

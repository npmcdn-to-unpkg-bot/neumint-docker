import { Injectable }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Expense } from '../models/expense';

@Injectable()
export class ExpenseService {

  private expensesUrl = 'app/expenses';  // URL to web api

  constructor(private http: Http) { }

  getExpenses(): Promise<Expense[]> {
    return this.http.get(this.expensesUrl)
               .toPromise()
               .then(response => response.json().data as Expense[])
               .catch(this.handleError);
  }

  getExpense(id: number): Promise<Expense> {
    return this.getExpenses()
               .then(expenses => expenses.find(expense => expense.id === id));
  }

  save(expense: Expense): Promise<Expense>  {
    if (expense.id) {
      return this.put(expense);
    }
    return this.post(expense);
  }

  delete(expense: Expense): Promise<Response> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.expensesUrl}/${expense.id}`;

    return this.http
               .delete(url, {headers: headers})
               .toPromise()
               .catch(this.handleError);
  }

  // Add new Expense
  private post(expense: Expense): Promise<Expense> {
    let headers = new Headers({
      'Content-Type': 'application/json'});

    return this.http
               .post(this.expensesUrl, JSON.stringify(expense), {headers: headers})
               .toPromise()
               .then(res => res.json().data)
               .catch(this.handleError);
  }

  // Update existing Expense
  private put(expense: Expense): Promise<Expense> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.expensesUrl}/${expense.id}`;

    return this.http
               .put(url, JSON.stringify(expense), {headers: headers})
               .toPromise()
               .then(() => expense)
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

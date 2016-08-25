import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Expense }        from '../models/expense';
import { ExpenseService } from '../expenses/expense.service';


@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard/dashboard.component.html',
  styleUrls: ['app/dashboard/dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public pageTitle: string = 'Dashboard - Top Expenses';
  
  expenses: Expense[] = [];

  constructor(
    private router: Router,
    private expenseService: ExpenseService) {
  }

  ngOnInit(): void {
    this.expenseService.getExpenses()
      .then(expenses => this.expenses = expenses.slice(1, 5));
  }

  gotoDetail(expense: Expense): void {
    
  }
}

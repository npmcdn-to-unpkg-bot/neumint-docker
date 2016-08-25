import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Expense }              from '../models/expense';
import { ExpenseService }       from './expense.service';


@Component({
    templateUrl: 'app/expenses/expense-list.component.html',
    styleUrls: ['app/expenses/expense-list.component.css'],
})


export class ExpenseListComponent implements OnInit {
    pageTitle: string = 'Expense List';
    listFilter: string = '';
    errorMessage: any;
    expenses: Expense[];

    constructor(
                private router: Router,
                private expenseService: ExpenseService) { }
    
    getExpenses(): void {
    this.expenseService
        .getExpenses()
        .then(expenses => this.expenses = expenses)
        .catch(error => this.errorMessage = error);
  }

    

    ngOnInit(): void {
        this.getExpenses(); 
    }

   
}

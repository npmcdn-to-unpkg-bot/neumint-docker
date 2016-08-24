import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Expense } from '../models/expense';


@Component({
    templateUrl: 'app/expenses/expense-list.component.html',
    styleUrls: ['app/expenses/expense-list.component.css'],
})


export class ExpenseListComponent implements OnInit {
    pageTitle: string = 'Expense List';
    listFilter: string = '';
    errorMessage: string;
    expenses: Expense[];

    constructor(private router: Router) {

    }

    

    ngOnInit(): void {
           
    }

   
}

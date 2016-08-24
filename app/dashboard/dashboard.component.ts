import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Expense }        from '../models/expense';


@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard/dashboard.component.html',
  styleUrls: ['app/dashboard/dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public pageTitle: string = 'Top Expenses';
  
  expenses: Expense[] = [];

  constructor(
    private router: Router) {
  }

  ngOnInit(): void {
    
  }

  gotoDetail(expense: Expense): void {
    
  }
}

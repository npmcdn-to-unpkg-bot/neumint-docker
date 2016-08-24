import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { ExpenseListComponent }   from './expenses/expense-list.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule
  ],
  declarations: [ 
    AppComponent,
    DashboardComponent,
    ExpenseListComponent
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }

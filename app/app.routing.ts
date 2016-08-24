import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }  from './dashboard/dashboard.component';
import { ExpenseListComponent }     from './expenses/expense-list.component';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'expenses',
    component: ExpenseListComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);

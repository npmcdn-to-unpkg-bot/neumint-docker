import { Component } from '@angular/core';

@Component({
  selector: 'mint-app',
  template:
   `
    <div>
    <div id="topbar" class="topbar"></div>
        <nav class='navbar navbar-inverse'>
            <div class='container-fluid'>
            <div class="navbar-header">
                <a class="navbar-brand" style="text-shadow:1px 1px 2px #2e2e2e;font-size:25px">{{pageTitle}}</a>
                </div>
                <ul class='nav navbar-nav navbar-right'>
                    <li><a [routerLink]="['/dashboard']">Home</a></li>
                    <li><span class="divider">|</span></li>
                    <li><a [routerLink]="['/expenses']">Expense List</a></li>
                </ul>
            </div>
        </nav>
        <div id="bottombar" class="bottombar"></div>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>
  `
})

export class AppComponent { 
  pageTitle: string = 'Neu Mint Application';

}

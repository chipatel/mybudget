import { Component } from '@angular/core';
import { BudgetService } from '../services/budget.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BudgetService]
})
export class AppComponent {
  title = 'app';

  private currentDate = new Date();
  constructor() {

  }

  public getCurrentMonth() {
    return this.currentDate.getMonth() + 1;
  }

  public getCurrentYear() {
    return this.currentDate.getFullYear();
  }
}

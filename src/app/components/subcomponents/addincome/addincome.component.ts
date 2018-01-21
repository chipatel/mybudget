import {Component} from '@angular/core';

import {BudgetModel} from './../../../model/budget.model';
import {BudgetService} from '../../../../services/budget.service';

@Component({
  moduleId: module.id,
  selector: 'app-addincome-form',
  templateUrl: 'addincome.component.html',
  styleUrls: ['addincome.component.css']
})
export class AddIncomeFormComponent {
  public budgetType: string;
  public budgetDescription: string;
  public budgetTag: string;
  public budgetAmount: number;
  public budgetMonth: number;
  public budgetYear: number;

  public budget: BudgetModel;

  constructor(public _budgetService: BudgetService) {
  }

  public addBudget() {
    this.budget = {
      budgetId: 0,
      budgetType: this.budgetType,
      budgetDescription: this.budgetDescription,
      budgetTag: this.budgetTag,
      budgetAmount: this.budgetAmount,
      budgetMonth: this.budgetMonth,
      budgetYear: this.budgetYear,
      budgetLastUpdateTime: new Date(),
      budgetLastUpdateBy: 'system'
    };
    this._budgetService.addBudget(this.budget).subscribe(budget => {
    });
  }


  selectedValue: string;

  budgetTagEnums = [
    {value: 'PAYROLL', viewValue: 'Payroll'},
    {value: 'MONTHLY_EXPENSE', viewValue: 'MonthlyExpnese'},
    {value: 'CC_BILL', viewValue: 'CC Bill'},
    {value: 'DEPOSIT', viewValue: 'Deposit'},
    {value: 'SAVING', viewValue: 'Saving'},
    {value: 'MANDIR', viewValue: 'Mandir'},
    {value: 'EXTRA', viewValue: 'Extra'}
  ];

  budgetTypeEnums = [
    {value: 'INCOME', viewValue: 'Income'},
    {value: 'EXPENSE', viewValue: 'Expnese'},
  ];

  budgetMonthEnums = [
    {value: 1, viewValue: 'January'},
    {value: 2, viewValue: 'February'},
    {value: 3, viewValue: 'March'},
    {value: 4, viewValue: 'April'},
    {value: 5, viewValue: 'May'},
    {value: 6, viewValue: 'June'},
    {value: 7, viewValue: 'July'},
    {value: 8, viewValue: 'August'},
    {value: 9, viewValue: 'September'},
    {value: 10, viewValue: 'October'},
    {value: 11, viewValue: 'November'},
    {value: 12, viewValue: 'December'},
  ];

  budgetYearEnums = [
    {value: 2016, viewValue: '2016'},
    {value: 2017, viewValue: '2017'},
    {value: 2018, viewValue: '2018'}
  ];
  /*
   <option value="PAYROLL">Payroll</option>
   <option value="REGULAR_EXPENSE">Regular Expense</option>
   <option value="CC_BILL">CC Bill</option>
   <option value="DEPOSIT">Deposit</option>
   <option value="SAVING">Saving</option>
   <option value="MANDIR">Mandir</option>
   <option value="EXTRA">Extra</option>*/
}

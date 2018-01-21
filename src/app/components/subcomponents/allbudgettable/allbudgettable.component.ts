import {Component} from '@angular/core';

import {BarChartModel} from './../../../model/barchart.model';
import {BudgetModel} from './../../../model/budget.model';
import {BudgetService} from '../../../../services/budget.service';

@Component({
  moduleId: module.id,
  selector: 'app-allbudgettable',
  templateUrl: 'allbudgettable.component.html'
})

export class AllBudgetTableComponent {
  allBudgetTable: BudgetModel[];

  amountAry: number[];

  constructor(public  _budgetService: BudgetService) {
    this._budgetService.getBudgets().subscribe(allBudgetTable => {
        this.allBudgetTable = allBudgetTable;
        // console.log(this.allBudgetTable);
      }
    );


    this._budgetService.getBudgets().flatMap((allBudget: Array<BudgetModel>) => {
      console.log(allBudget);
    });
  }
}

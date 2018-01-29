import { Component, OnInit } from '@angular/core';
import { BudgetModel } from '../../../model/budget.model';
import { MatTableDataSource } from '@angular/material';
import { BudgetService } from '../../../../services/budget.service';
import { buffer } from 'rxjs/operator/buffer';
import { concat } from 'rxjs/observable/concat';

@Component({
  moduleId: module.id,
  selector: 'app-monthlytable',
  templateUrl: './monthlytable.component.html',
  styleUrls: ['./monthlytable.component.css']
})
export class MonthlytableComponent implements OnInit {

  private incomeData: BudgetModel[];
  private expenseData: BudgetModel[];
  private savingData: BudgetModel[];

  private totalIncome: number;
  private totalExpense: number;
  private totalSaving: number;

  private currentDate = new Date();
  budgetData: BudgetModel[];
  incomeMatTableData = new MatTableDataSource<BudgetModel>();
  expenseMatTableData = new MatTableDataSource<BudgetModel>();
  savingMatTableData = new MatTableDataSource<BudgetModel>();

  columnsToShow = ['description', 'amount'];


  constructor(private _budgetService: BudgetService) {
    this.incomeData = [];
    this.expenseData = [];
    this.savingData = [];

    this.totalIncome = 0.0;
    this.totalExpense = 0.0;
    this.totalSaving = 0.0;
  }

  ngOnInit() {
    this.getBudgetMonthYearDataTable(this.currentDate.getMonth() + 1, this.currentDate.getFullYear());
  }

  getAllDataTable() {
    this._budgetService.getBudgets().subscribe(allbudget => {
      console.log(allbudget);
    });
  }

  getBudgetMonthYearDataTable(month, year) {
    this._budgetService.getBudgetsByMonthAndYear(month, year).subscribe(allbudget => {
      let tmp: BudgetModel;
      for (let i = 0; i < allbudget.length; i++) {
        tmp = allbudget[i];
        if (tmp.budgetType === 'INCOME') {
          this.incomeData.push(tmp);
          this.totalIncome += tmp.budgetAmount;
        }

        if (tmp.budgetType === 'EXPENSE') {
          this.expenseData.push(tmp);
          this.totalExpense += tmp.budgetAmount;
        }

        if (tmp.budgetType === 'SAVING') {
          this.savingData.push(tmp);
          this.totalSaving += tmp.budgetAmount;
        }
      }

      this.incomeMatTableData.data = this.incomeData;
      this.expenseMatTableData.data = this.expenseData;
      this.savingMatTableData.data = this.savingData;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../../../services/budget.service';
import { BudgetModel } from '../../model/budget.model';
import { MatTableDataSource } from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-detailsbudget',
  templateUrl: './detailsbudget.component.html',
  styleUrls: ['./detailsbudget.component.css']
})
export class DetailsbudgetComponent implements OnInit {

  private currentDate = new Date();
  budgetData: BudgetModel[];
  budgettabledata = new MatTableDataSource<BudgetModel>();
  columnsToShow = ['description', 'amount'];
  budgetValue: string;

  constructor(private _budgetService: BudgetService) {
  }

  refreshBudgetPanel() {
console.log(this.budgetValue);
  }

  ngOnInit() {
    this.getBudgetMonthYearDataTable(this.currentDate.getMonth() + 1, this.currentDate.getFullYear());
  }

  getAllDataTable() {
    this._budgetService.getBudgets().subscribe(allbudget => {
      this.budgettabledata.data = allbudget;
    });
  }

  getBudgetMonthYearDataTable(month, year) {
    this._budgetService.getBudgetsByMonthAndYear(month, year).subscribe(allbudget => {
      this.budgettabledata.data = allbudget;
    });
  }

  updateDetailsPage($event: any, budgetValue: string) {
    console.log()
      ;
  }

  budgetSelection = [{ value: '1##2016', viewValue: 'Jan-2016' },
  { value: '2##2016', viewValue: 'Feb-2016' },
  { value: '3##2016', viewValue: 'Mar-2016' },
  { value: '4##2016', viewValue: 'Apr-2016' },
  { value: '5##2016', viewValue: 'May-2016' },
  { value: '6##2016', viewValue: 'Jun-2016' },
  { value: '7##2016', viewValue: 'Jul-2016' },
  { value: '8##2016', viewValue: 'Aug-2016' },
  { value: '9##2016', viewValue: 'Sep-2016' },
  { value: '10##2016', viewValue: 'Oct-2016' },
  { value: '11##2016', viewValue: 'Nov-2016' },
  { value: '12##2016', viewValue: 'Dec-2016' },
  { value: '1##2017', viewValue: 'Jan-2017' },
  { value: '2##2017', viewValue: 'Feb-2017' },
  { value: '3##2017', viewValue: 'Mar-2017' },
  { value: '4##2017', viewValue: 'Apr-2017' },
  { value: '5##2017', viewValue: 'May-2017' },
  { value: '6##2017', viewValue: 'Jun-2017' },
  { value: '7##2017', viewValue: 'Jul-2017' },
  { value: '8##2017', viewValue: 'Aug-2017' },
  { value: '9##2017', viewValue: 'Sep-2017' },
  { value: '10##2017', viewValue: 'Oct-2017' },
  { value: '11##2017', viewValue: 'Nov-2017' },
  { value: '12##2017', viewValue: 'Dec-2017' },
  { value: '1##2018', viewValue: 'Jan-2018' },
  { value: '2##2018', viewValue: 'Feb-2018' },
  { value: '3##2018', viewValue: 'Mar-2018' },
  { value: '4##2018', viewValue: 'Apr-2018' },
  { value: '5##2018', viewValue: 'May-2018' },
  { value: '6##2018', viewValue: 'Jun-2018' },
  { value: '7##2018', viewValue: 'Jul-2018' },
  { value: '8##2018', viewValue: 'Aug-2018' },
  { value: '9##2018', viewValue: 'Sep-2018' },
  { value: '10##2018', viewValue: 'Oct-2018' },
  { value: '11##2018', viewValue: 'Nov-2018' },
  { value: '12##2018', viewValue: 'Dec-2018' }
  ];
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { BudgetService } from '../../../../services/budget.service';
import { DataSource } from '@angular/cdk/collections';
import { BudgetModel } from '../../../model/budget.model';
import { Observable } from 'rxjs/Observable';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { AppComponent } from '../../../app.component';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {
  budgetData: BudgetModel[];
  budgettabledata = new MatTableDataSource<BudgetModel>();
  columnsToShow = ['type', 'tag', 'description', 'amount', 'month', 'year'];
  constructor(private _budgetService: BudgetService, private mainComp: AppComponent) {
    console.log(this.mainComp.getCurrentMonth() + '\n\n' + this.mainComp.getCurrentYear());
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this._budgetService.getBudgets().subscribe(allbudget => {
      this.budgettabledata.data = allbudget;
    });
  }

  ngAfterViewInit() {
    this.budgettabledata.paginator = this.paginator;
  }

}

export class BudgetDataSource extends DataSource<any> {
  constructor(private _budgetService: BudgetService) {
    super();
  }

  connect(): Observable<BudgetModel[]> {
    return this._budgetService.getBudgets();
  }

  disconnect() { }
}

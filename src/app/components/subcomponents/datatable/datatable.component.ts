import { Component, OnInit, ViewChild, Input } from '@angular/core';
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
  @ViewChild(MatPaginator) paginator: MatPaginator;

  private currentDate = new Date();
  budgetData: BudgetModel[];
  @Input() budgettabledata = new MatTableDataSource<BudgetModel>();
  @Input() total: number;
  columnsToShow = ['description', 'amount'];

  constructor(private _budgetService: BudgetService) {
  }
  ngOnInit() {

  }
  ngAfterViewInit() {
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.budgettabledata.filter = filterValue;
  }

}

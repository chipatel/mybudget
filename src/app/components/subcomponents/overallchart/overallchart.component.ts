import {Component} from '@angular/core';

import {BarChartModel} from './../../../model/barchart.model';
import {BudgetModel} from './../../../model/budget.model';
import {BudgetService} from '../../../../services/budget.service';

@Component({
  moduleId: module.id,
  selector: 'app-overallchart',
  templateUrl: 'overallchart.component.html'
})

export class OverallchartComponent {
  public allBudgetModels: BudgetModel[];
  public barchartModel: BarChartModel;

  constructor(public _budgetService: BudgetService) {
    this.today = new Date();
    this.getAllIncome();
  }


  public getAllIncome() {
    this._budgetService.getBudgets().subscribe(allBudgetModels => {
        this.allBudgetModels = allBudgetModels;
        this.generateChartData();
      }
    );
  }

  public generateChartData() {
    for (const budget of this.allBudgetModels) {
    }
  }

  public chartData: BarChartModel[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  public barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public overallChartType = 'bar';
  public today;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartType = 'bar';
  public barChartLegend = true;

  public oneYearRandor() {
    console.log('one year randor button clicked...' + this.today);
    this.getOneYearTimeline();
  }

  public getOneYearTimeline() {
    this.barChartLabels = this.dateRange('2017-01-13', '2018-01-13');
  }

  public sixMonthRandor() {
    console.log('six month randor button clicked...');
    this.barChartLabels = ['Jan2016', 'Feb2017'];
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public  dateRange(startDate, endDate) {
    const start = startDate.split('-');
    const end = endDate.split('-');
    const startYear = parseInt(start[0]);
    const endYear = parseInt(end[0]);
    const dates = [];

    for (let i = startYear; i <= endYear; i++) {
      let endMonth = i !== endYear ? 11 : parseInt(end[1]) - 1;
      let startMon = i === startYear ? parseInt(start[1]) - 1 : 0;
      for (let j = startMon; j <= endMonth; j = j > 12 ? j % 12 || 11 : j + 1) {
        let month = j + 1;
        let displayMonth = month < 10 ? '0' + month : month;
        dates.push([i, displayMonth, '01'].join('-'));
      }
    }
    return dates;
  }
}

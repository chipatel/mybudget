import { Component } from '@angular/core';

import { BarChartModel } from './../../../model/barchart.model';
import { BudgetModel } from './../../../model/budget.model';
import { BudgetService } from '../../../../services/budget.service';

@Component({
  moduleId: module.id,
  selector: 'app-overallchart',
  templateUrl: 'overallchart.component.html'
})

export class OverallchartComponent {
  public allBudgetModels: BudgetModel[];
  public barChartModel: BarChartModel;
  public barChartLabels: string[];
  private chartType: string;
  private chartLegend: boolean;
  private chartOptions: any;

  constructor(public _budgetService: BudgetService) {
    this.chartType = 'bar';
    this.chartLegend = true;
    this.chartOptions = {
      scaleShowVerticalLines: true,
      responsive: true
    };
    this.getAllIncome();
  }


  public getAllIncome() {
    this._budgetService.getOverallData().subscribe(overalldata => {
      this.barChartModel = overalldata.chartData;
      this.barChartLabels = overalldata.axisLabel;

      console.log(this.barChartLabels);
    });
  }

  public generateChartData() {
    for (const budget of this.allBudgetModels) {
    }
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public dateRange(startDate, endDate) {
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

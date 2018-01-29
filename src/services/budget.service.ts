import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BudgetModel } from './../app/model/budget.model';
import 'rxjs/Rx';


@Injectable()
export class BudgetService {
  private _http: any;
  private budgetApiUrl: string;

  constructor(_http: HttpClient) {
    this._http = _http;
    this.budgetApiUrl = 'http://localhost:4200/budget';
  }

  getBudgets() {
    return this._http.get(this.budgetApiUrl + '/all').map((res: Response) => res);
  }

  getBudgetsByMonthAndYear(month, year) {
    return this._http.get(this.budgetApiUrl + '/get?month=' + month + '&year=' + year).map((res: Response) => res);
  }

  getOverallData() {
    return this._http.get(this.budgetApiUrl + '/overall?year=2018').map((res: Response) => res);
  }

  addBudget(budget: BudgetModel) {
    return this._http.post(this.budgetApiUrl + '/save',
      budget, {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/json')
      });
  }
}
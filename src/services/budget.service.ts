import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/Rx';
import {BudgetModel} from './../app/model/budget.model';

@Injectable()
export class BudgetService {
  private http: any;
  private getIncomeUrl: string;

  constructor(http: HttpClient) {
    this.http = http;
    this.getIncomeUrl = 'http://localhost:4200/budget';
  }

  getBudgets() {
    return this.http.get(this.getIncomeUrl + '/get').map((res: Response) => res);
  }

  addBudget(budget: BudgetModel) {
    return this.http.post(this.getIncomeUrl + '/save',
      budget, {
        headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
      });
  }

}

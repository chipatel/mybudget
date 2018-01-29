import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../../../services/budget.service';
import { DatatableComponent } from '../subcomponents/datatable/datatable.component';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}

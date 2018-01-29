import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ChartsModule} from 'ng2-charts';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {HomeComponent} from './components/home/home.component';
import {AddComponent} from './components/add/add.component';
import {HelpComponent} from './components/help/help.component';
import {SettingsComponent} from './components/settings/settings.component';

// SubComponents
import {OverallchartComponent} from './components/subcomponents/overallchart/overallchart.component';
import {AllBudgetTableComponent} from './components/subcomponents/allbudgettable/allbudgettable.component';
import {AddIncomeFormComponent} from './components/subcomponents/addincome/addincome.component';
import { DatatableComponent } from './components/subcomponents/datatable/datatable.component';
import { AllInOneTableComponent } from './components/subcomponents/allinonetable/allinonetable.component';

import {routing} from './app.routing';

// Mat Anglular
import {
  MatFormFieldModule,
  MatSelectModule,
  MatTableModule,
  MatInputModule,
  MatPaginatorModule,
  MatCardModule
 // MatTableDataSource
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CdkTableModule} from '@angular/cdk/table';
import { MonthlytableComponent } from './components/subcomponents/monthlytable/monthlytable.component';
import { DetailsbudgetComponent } from './components/detailsbudget/detailsbudget.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AddComponent,
    SettingsComponent,
    HelpComponent,
    OverallchartComponent,
    AllBudgetTableComponent,
    AddIncomeFormComponent,
    DatatableComponent,
    AllInOneTableComponent,
    MonthlytableComponent,
    DetailsbudgetComponent
  ],
  exports: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatSelectModule,
    CdkTableModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule
   // MatTableDataSource
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ChartsModule} from 'ng2-charts';


import { AppComponent } from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {HomeComponent} from './components/home/home.component';
import {HelpComponent} from './components/help/help.component';
import {SettingsComponent} from './components/settings/settings.component';

// SubComponents
import {OverallchartComponent} from './components/subcomponents/overallchart/overallchart.component';


import {routing} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SettingsComponent,
    HelpComponent,
    OverallchartComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

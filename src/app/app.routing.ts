import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AddComponent } from './components/add/add.component';
import { SettingsComponent } from './components/settings/settings.component';
import { HelpComponent } from './components/help/help.component';
import { DetailsbudgetComponent } from './components/detailsbudget/detailsbudget.component';


const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'add',
    component: AddComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'help',
    component: HelpComponent
  },
  {
    path: 'details',
    component: DetailsbudgetComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

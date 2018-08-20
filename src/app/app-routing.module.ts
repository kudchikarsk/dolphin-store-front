import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientsComponent } from './clients/clients.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StocksComponent } from './stocks/stocks.component';
import { ClientComponent } from './client/client.component';
import { EmployeesComponent } from './employees/employees.component';
import { TonerJobsComponent } from './toner-jobs/toner-jobs.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'clients/:id', component: ClientComponent},
  { path: 'stocks', component: StocksComponent},
  { path: 'employees', component: EmployeesComponent},
  { path: 'toner-jobs', component: TonerJobsComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
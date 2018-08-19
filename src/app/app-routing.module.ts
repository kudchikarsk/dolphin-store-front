import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientsComponent } from './clients/clients.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientComponent } from './clients/client/client.component';
import { StocksComponent } from './stocks/stocks.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'clients/:id', component: ClientComponent},
  { path: 'stocks', component: StocksComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
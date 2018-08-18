import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientsComponent } from './clients/clients.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { AddClientComponent } from './add-client/add-client.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddTonerComponent } from './add-toner/add-toner.component';
import { EditClientComponent } from './edit-client/edit-client.component';
import { EditTonerComponent } from './edit-toner/edit-toner.component';
import { StockManagerComponent } from './stock-manager/stock-manager.component';
import { AddStockComponent } from './add-stock/add-stock.component';
import { EditStockComponent } from './edit-stock/edit-stock.component';
import { EditTonerPartsComponent } from './edit-toner-parts/edit-toner-parts.component';
import { AddTonerPartsComponent } from './add-toner-parts/add-toner-parts.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'clients/view/:id', component: ClientDetailsComponent },
  { path: 'clients/add', component: AddClientComponent },
  { path: 'clients/edit/:id', component: EditClientComponent },
  { path: 'toners/add/:id', component: AddTonerComponent },
  { path: 'toners/edit/:id', component: EditTonerComponent },
  { path: 'stocks', component: StockManagerComponent },
  { path: 'stocks/add', component: AddStockComponent },
  { path: 'stocks/edit/:id', component: EditStockComponent },
  { path: 'toner-parts/add', component: AddTonerPartsComponent },
  { path: 'toner-parts/edit/:id', component: EditTonerPartsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
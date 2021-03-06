import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { JQ_TOKEN } from './jquery.service';

import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StocksComponent } from './stocks/stocks.component';
import { UiModalComponent } from './ui-modal/ui-modal.component';
import { TonerEditableRowComponent } from './toner-editable-row/toner-editable-row.component';
import { ClientComponent } from './client/client.component';
import { ClientTonersComponent } from './client-toners/client-toners.component';
import { ClientInfoComponent } from './client-info/client-info.component';
import { ClientAddModalComponent } from './client-add-modal/client-add-modal.component';
import { TonerAddModalComponent } from './toner-add-modal/toner-add-modal.component';
import { StockAddModalComponent } from './stock-add-modal/stock-add-modal.component';
import { ClientEditableRowComponent } from './client-editable-row/client-editable-row.component';
import { StockEditableRowComponent } from './stock-editable-row/stock-editable-row.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeAddModalComponent } from './employee-add-modal/employee-add-modal.component';
import { EmployeeEditableRowComponent } from './employee-editable-row/employee-editable-row.component';
import { TonerJobsComponent } from './toner-jobs/toner-jobs.component';
import { TonerJobAddModalComponent } from './toner-job-add-modal/toner-job-add-modal.component';
import { UiDropdownComponent } from './ui-dropdown/ui-dropdown.component';
import { TonerJobEditableRowComponent } from './toner-job-editable-row/toner-job-editable-row.component';
import {NgbModule, NgbDateNativeAdapter, NgbDateAdapter} from '@ng-bootstrap/ng-bootstrap';

let jQuery=window['jQuery'];

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    ClientComponent,
    ClientTonersComponent,
    ClientInfoComponent,
    DashboardComponent,
    StocksComponent,
    ClientAddModalComponent,
    TonerAddModalComponent,
    StockAddModalComponent,
    UiModalComponent,
    ClientEditableRowComponent,
    StockEditableRowComponent,
    TonerEditableRowComponent,
    EmployeesComponent,
    EmployeeAddModalComponent,
    EmployeeEditableRowComponent,
    TonerJobsComponent,
    TonerJobAddModalComponent,
    UiDropdownComponent,
    TonerJobEditableRowComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    {provide:JQ_TOKEN, useValue:jQuery},
    {provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

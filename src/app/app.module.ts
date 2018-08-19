import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { JQ_TOKEN } from './jquery.service';

import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StocksComponent } from './stocks/stocks.component';
import { ClientComponent } from './clients/client/client.component';
import { ClientTonersComponent } from './clients/client/client-toners/client-toners.component';
import { ClientInfoComponent } from './clients/client/client-info/client-info.component';
import { ClientAddModalComponent } from './clients/client-add-modal/client-add-modal.component';
import { StockAddModalComponent } from './stocks/stock-add-modal/stock-add-modal.component';
import { TonerAddModalComponent } from './clients/client/client-toners/toner-add-modal/toner-add-modal.component';

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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    {provide:JQ_TOKEN, useValue:jQuery}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

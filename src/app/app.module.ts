import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import { AddClientComponent } from './add-client/add-client.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { ClientTonersComponent } from './client-toners/client-toners.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddTonerComponent } from './add-toner/add-toner.component';
import { ClientInfoComponent } from './client-info/client-info.component';
import { EditClientComponent } from './edit-client/edit-client.component';
import { EditTonerComponent } from './edit-toner/edit-toner.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    AddClientComponent,
    ClientDetailsComponent,
    ClientTonersComponent,
    DashboardComponent,
    AddTonerComponent,
    ClientInfoComponent,
    EditClientComponent,
    EditTonerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit, ViewChild } from '@angular/core';
import { Client } from '../models/client';
import { ClientService } from '../client.service';
import { Toner } from '../models/toner';
import { TonerService } from '../toner.service';
import { Employee } from '../models/employee';
import { EmployeeService } from '../employee.service';
import { TonerJob } from '../models/toner-job';
import { StockService } from '../stock.service';
import { StockItem } from '../models/stock';
import { PurchaseItem } from '../models/purchase-item';
import { UiModalComponent } from '../ui-modal/ui-modal.component';

@Component({
  selector: 'app-toner-job-add-modal',
  templateUrl: './toner-job-add-modal.component.html',
  styleUrls: ['./toner-job-add-modal.component.css']
})
export class TonerJobAddModalComponent implements OnInit {
  step:number=0;
  clients:Client[];
  toners:Toner[];
  employees:Employee[];
  stockItems:StockItem[];
  tonerJob:TonerJob;
  @ViewChild(UiModalComponent) modal;

  constructor(private clientService:ClientService, private tonerService:TonerService, private employeeService:EmployeeService, private stockService:StockService) { 
    this.tonerJob=new TonerJob();    
  }
  
  ngOnInit() {
    this.employeeService.getEmployees().subscribe(es=>this.employees=es.map(e=>new Employee(e)));
  }
  
  searchClients(name:string):void {
    console.log("search clients fired!");
    if(name==null || name.trim()=="") return;
    this.clientService.getClients(name).subscribe(cs=>this.clients=cs.map(c=>new Client(c)));
  }

  searchStockItems(name:string):void {
    console.log("search stockitems fired!");
    if(name==null || name.trim()=="") return;
    this.stockService.getStockItems(name).subscribe(ss=>this.stockItems=ss.map(s=>new StockItem(s)));
  }

  addPurchasedItem(s:StockItem){
    this.stockItems=[];
    if(this.tonerJob.PurchasedItems.map(p=>p.StockItem).indexOf(s)>-1) return;
    this.tonerJob.PurchasedItems.push(new PurchaseItem(undefined,1,s));
  }

  removePurchasedItem(value:PurchaseItem){
    var index=this.tonerJob.PurchasedItems.indexOf(value);
    if(index>-1){
      this.tonerJob.PurchasedItems.splice(index,1);
    }
  }

  selectClient(client:Client){
    if(client==null) client=new Client();
    this.tonerJob.updateClient(client);
    this.step=1;
    this.tonerService.getClientToners(this.tonerJob.ClientId).subscribe(ts=>this.toners=ts.map(t=>new Toner(t)));
  }

  toggleTonerSelection(toner:Toner){
    toner.Selected=!toner.Selected;
    if(toner.Selected){      
      this.tonerJob.Toners.push(toner);
    }
    else{
      let i=this.tonerJob.Toners.indexOf(toner);
      if(i>-1){
        this.tonerJob.Toners.splice(i,1);
      }      
    }
  }

  selectCollectedBy(employee:Employee){
    if(employee==null) employee=new Employee();
    this.tonerJob.updateCollectedBy(employee);
  }

  selectDeliveredBy(employee:Employee){
    if(employee==null) employee=new Employee();
    this.tonerJob.updateDeliveredBy(employee);
  }

  addTonerJob(){    
    console.log("add toner job:"+JSON.stringify(this.tonerJob));
    this.modal.close();
  }

  cancel(){
    this.step = 0;    
    this.clients = null;
    this.toners = null;
    this.tonerJob=new TonerJob();
  }
}

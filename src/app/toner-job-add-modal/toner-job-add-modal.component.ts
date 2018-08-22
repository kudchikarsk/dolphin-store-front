import { Component, OnInit } from '@angular/core';
import { Client } from '../models/client';
import { ClientService } from '../client.service';
import { Toner } from '../models/toner';
import { TonerService } from '../toner.service';
import { Employee } from '../models/employee';
import { EmployeeService } from '../employee.service';
import { TonerJob } from '../models/toner-job';

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
  tonerJob:TonerJob;

  constructor(private clientService:ClientService, private tonerService:TonerService, private employeeService:EmployeeService) { 
    this.tonerJob=new TonerJob();
    this.tonerJob.Toners=[];
  }
  
  ngOnInit() {
    this.employeeService.getEmployees().subscribe(e=>this.employees=e);
  }
  
  search($event:any){
    console.log("search fired!");
    let name:string=$event.target.value;
    if(name==null || name.trim()=="") return;
    this.clientService.getClients(name).subscribe(c=>this.clients=c);
  }

  selectClient(client:Client){
    if(client==null) client=new Client();
    this.tonerJob.updateClient(client);
    this.step=1;
    this.clientService.getClientToners(this.tonerJob.ClientId).subscribe(t=>this.toners=t);
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
  }

  cancel(){
    this.step = 0;    
    this.clients = null;
    this.toners = null;
    this.tonerJob=new TonerJob();
    this.tonerJob.Toners=[];
  }
}

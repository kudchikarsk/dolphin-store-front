import { Component, OnInit } from '@angular/core';
import { Client } from '../models/client';
import { ClientService } from '../client.service';
import { Toner } from '../models/toner';
import { TonerService } from '../toner.service';

@Component({
  selector: 'app-toner-job-add-modal',
  templateUrl: './toner-job-add-modal.component.html',
  styleUrls: ['./toner-job-add-modal.component.css']
})
export class TonerJobAddModalComponent implements OnInit {
  step:number=0;
  clients:Client[];
  client:Client;
  toners:Toner[];
  constructor(private clientService:ClientService, private tonerService:TonerService) { }
  
  ngOnInit() {
  }
  
  search($event:any){
    console.log("search fired!");
    let name:string=$event.target.value;
    if(name==null || name.trim()=="") return;
    this.clientService.getClients(name).subscribe(c=>this.clients=c);
  }

  selectClient(client:Client){
    this.client=client;
    this.step=1;
    this.clientService.getClientToners(this.client.Id).subscribe(t=>this.toners=t);
  }

  selectToner(toner:Toner){
    toner.Selected=!toner.Selected;
  }

  cancel(){
    this.step    =0;
    this.clients =null;
    this.client  =null;
    this.toners=null;
  }
}

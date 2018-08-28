import { Component, OnInit } from '@angular/core';
import { Client } from "./../models/client";
import { ClientService } from "./../client.service";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  
  clients:Client[]=[];
  name:string;

  constructor(private clientService:ClientService) { }

  ngOnInit() {
    this.clientService.getClients().subscribe(cs=> this.clients=cs.map(c=>new Client(c)));
  }

  search(){
    this.clientService.getClients(this.name).subscribe(cs=>this.clients=cs.map(c=>new Client(c)));
  }

  removeClient(c:Client){
    let index=this.clients.indexOf(c);
    if(index>-1){
      this.clients.splice(index,1);
    }
  }
}

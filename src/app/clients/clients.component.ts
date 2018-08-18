import { Component, OnInit } from '@angular/core';
import { Client } from "./../models/client";
import { ClientService } from "./../client.service";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  
  clients:Array<Client>=[];

  constructor(private clientService:ClientService) { }

  ngOnInit() {
    this.clientService.getClients().subscribe(c=> this.clients=c);
  }

}

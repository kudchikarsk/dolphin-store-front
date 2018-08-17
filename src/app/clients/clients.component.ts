import { Component, OnInit } from '@angular/core';
import { Client } from "./../models/client";
import { CLIENTS } from "./../mocks/mock-clients";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  
  clients:Array<Client>=[];

  constructor() { }

  ngOnInit() {
    this.clients=CLIENTS;
  }

}

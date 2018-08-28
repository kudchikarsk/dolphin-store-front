import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Client } from '../models/client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  clientId:number;
  client:Client;

  constructor(private route:ActivatedRoute, public location:Location, private clientServce:ClientService) { 
    this.clientId=+this.route.snapshot.paramMap.get('id');
  }
  
  ngOnInit() {    
    this.clientServce.getClient(this.clientId).subscribe(c=>this.client=new Client(c));
  }

}

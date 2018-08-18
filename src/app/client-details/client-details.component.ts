import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ClientService } from './../client.service';
import { Client } from './../models/client';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  clientId:number;
  client:Client;

  constructor(private route:ActivatedRoute, public location:Location, private clientServce:ClientService) { 
    this.clientId=+this.route.snapshot.paramMap.get('id');
  }
  
  ngOnInit() {    
    this.clientServce.get(this.clientId).subscribe(c=>this.client=c);
  }
}

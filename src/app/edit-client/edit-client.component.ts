import { Component, OnInit } from '@angular/core';
import { Client } from '../models/client';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
  clientId:number;
  client:Client=new Client();
  unmodified:Client;

  constructor(public route:ActivatedRoute, private location:Location, private clientService: ClientService) { 
    this.clientId=+this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.clientService.get(this.clientId).subscribe(c=>{
      this.unmodified=c;

      this.client.Name    = this.unmodified.Name   ;
      this.client.Address = this.unmodified.Address;
      this.client.Mobile  = this.unmodified.Mobile ;
      this.client.Email   = this.unmodified.Email  ;
      
    });
  }

  save()
  {
    this.unmodified.Name    = this.client.Name   ;
    this.unmodified.Address = this.client.Address;
    this.unmodified.Mobile  = this.client.Mobile ;
    this.unmodified.Email   = this.client.Email  ;

    this.location.back();
  }

}

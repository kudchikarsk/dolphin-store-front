import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { ClientService  } from "./../client.service";
import { Client } from '../models/client';
import { ActivatedRoute } from '@angular/router';
import { Toner } from '../models/toner';

@Component({
  selector: 'app-add-toner',
  templateUrl: './add-toner.component.html',
  styleUrls: ['./add-toner.component.css']
})
export class AddTonerComponent implements OnInit {
  clientId:number;
  client:Client=new Client();
  toner:Toner;
  constructor(public location:Location, private router:ActivatedRoute, private clientService:ClientService) {
    this.clientId=+this.router.snapshot.paramMap.get('id');
    this.toner=new Toner(this.clientId);
   }

  ngOnInit() {
    this.clientService.get(this.clientId).subscribe(c=>this.client=c);
  }

  add(){
    console.log(this.toner);
    this.location.back();
  }

}

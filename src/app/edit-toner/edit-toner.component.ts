import { Component, OnInit } from '@angular/core';
import { Toner } from '../models/toner';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Client } from '../models/client';
import { ClientService } from '../client.service';
import { TonerService } from '../toner.service';

@Component({
  selector: 'app-edit-toner',
  templateUrl: './edit-toner.component.html',
  styleUrls: ['./edit-toner.component.css']
})
export class EditTonerComponent implements OnInit {
  tonerId:number;
  toner:Toner=new Toner();
  unmodified:Toner;
  client:Client =new Client();

  constructor(public location:Location, private route:ActivatedRoute, private clientService: ClientService, private tonerService:TonerService) { 
    this.tonerId=+route.snapshot.paramMap.get('id');
  }

  ngOnInit() {    
    this.tonerService.get(this.tonerId).subscribe(t=>{
      this.unmodified=t;
      this.clientService.get(this.unmodified.ClientId).subscribe(c=>this.client=c);
      this.toner.Name=this.unmodified.Name;
    });
  }

  save() {
    this.unmodified.Name=this.toner.Name;
    this.location.back();
  }

}

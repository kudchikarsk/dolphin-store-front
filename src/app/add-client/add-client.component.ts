import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Client } from './../models/client';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  client:Client=new Client();

  constructor(public location:Location) { }

  ngOnInit() {
  }
  
  add(){
    console.log(this.client);
    this.location.back();
  }

}

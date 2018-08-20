import { Component, OnInit, Input } from '@angular/core';
import { Client } from '../models/client';

@Component({
  selector: 'app-client-editable-row',
  templateUrl: './client-editable-row.component.html',
  styleUrls: ['./client-editable-row.component.css']
})
export class ClientEditableRowComponent implements OnInit {
  
  @Input() client:Client;
  edit:Client=new Client();
  isEditable:boolean;

  constructor() { 
    
  }

  ngOnInit() {
    this.edit=this.client.copy();
  }

  update(){
    this.client.update(this.edit);
    console.log("update client:"+JSON.stringify(this.client));
    this.isEditable=false;
  }

  cancel(){
    this.edit=this.client.copy();
    this.isEditable=false;
  }

}

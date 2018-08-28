import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Client } from '../models/client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-editable-row',
  templateUrl: './client-editable-row.component.html',
  styleUrls: ['./client-editable-row.component.css']
})
export class ClientEditableRowComponent implements OnInit {
  
  @Input() client:Client;
  @Output() deleteClientEvent:EventEmitter<Client>=new EventEmitter();
  edit:Client=new Client();
  isEditable:boolean;

  constructor(private clientService:ClientService) { 
    
  }

  ngOnInit() {
    this.edit=new Client(this.client);
  }

  delete(){
    this.clientService.deleteClient(this.client.Id).subscribe(r=>{
      this.deleteClientEvent.emit(this.client);
    });
  }

  update(){
    this.clientService.updateClient(this.edit).subscribe(c=>{
      this.client.update(c);
      this.isEditable=false;
    });    
  }

  cancel(){
    this.edit=new Client(this.client);
    this.isEditable=false;
  }

}

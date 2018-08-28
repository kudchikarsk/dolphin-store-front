import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { UiModalComponent } from '../ui-modal/ui-modal.component';
import { Client } from '../models/client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-add-modal',
  templateUrl: './client-add-modal.component.html',
  styleUrls: ['./client-add-modal.component.css']
})
export class ClientAddModalComponent implements OnInit {
  @ViewChild(UiModalComponent) modal:UiModalComponent;
  client:Client;
  @Output() newClientEvent:EventEmitter<Client>=new EventEmitter();

  constructor(private clientService:ClientService) { 
    this.client=new Client();
  }

  ngOnInit() {
  }

  add(){
    console.log(this.client);
    this.clientService.addClient(this.client).subscribe(c=>{
      this.newClientEvent.emit(new Client(c));
      this.close();
    });
    
  }

  cancel(){
    this.close();
  }

  close(): void {
    this.client=new Client();
    this.modal.close();    
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { UiModalComponent } from '../ui-modal/ui-modal.component';
import { Client } from '../models/client';

@Component({
  selector: 'app-client-add-modal',
  templateUrl: './client-add-modal.component.html',
  styleUrls: ['./client-add-modal.component.css']
})
export class ClientAddModalComponent implements OnInit {
  @ViewChild(UiModalComponent) modal:UiModalComponent;
  client:Client;

  constructor() { 
    this.client=new Client(undefined,"M/s.");
  }

  ngOnInit() {
  }

  add(){
    this.close();
  }

  cancel(){
    this.close();
  }

  close(): void {
    this.client=new Client(undefined,"M/s.");
    this.modal.close();    
  }

}

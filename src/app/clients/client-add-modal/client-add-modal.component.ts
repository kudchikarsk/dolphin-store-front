import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { Client } from '../../models/client';
import { JQ_TOKEN } from '../../jquery.service';

@Component({
  selector: 'app-client-add-modal',
  templateUrl: './client-add-modal.component.html',
  styleUrls: ['./client-add-modal.component.css']
})
export class ClientAddModalComponent implements OnInit {
  client:Client;
  @ViewChild("modal") modalEle:ElementRef;

  constructor(@Inject(JQ_TOKEN) private $:any) { 
    this.client=new Client("M/s.");
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
    this.client=new Client("M/s.");
    this.$(this.modalEle.nativeElement).modal('hide');    
  }

}

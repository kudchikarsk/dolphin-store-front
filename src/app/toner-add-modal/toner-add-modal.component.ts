import { Component, OnInit, Input, ElementRef, Inject, ViewChild } from '@angular/core';
import { UiModalComponent } from '../ui-modal/ui-modal.component';
import { Toner } from '../models/toner';

@Component({
  selector: 'app-toner-add-modal',
  templateUrl: './toner-add-modal.component.html',
  styleUrls: ['./toner-add-modal.component.css']
})
export class TonerAddModalComponent implements OnInit {
  @Input() clientId:number;
  @ViewChild(UiModalComponent) modal: UiModalComponent;
  toner:Toner;

  constructor() { 

  }

  ngOnInit() {
    this.toner=new Toner(undefined,this.clientId);
  }

  add(){
    console.log("add toner:"+JSON.stringify(this.toner));
    this.close();
  }

  cancel(){
    this.close();
  }

  close(): void {
    this.toner=new Toner(undefined,this.clientId);
    this.modal.close();    
  }

}

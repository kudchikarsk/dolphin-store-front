import { Component, OnInit, Input, ElementRef, Inject, ViewChild } from '@angular/core';
import { Client } from '../../../../models/client';
import { Toner } from '../../../../models/toner';
import { JQ_TOKEN } from '../../../../jquery.service';

@Component({
  selector: 'app-toner-add-modal',
  templateUrl: './toner-add-modal.component.html',
  styleUrls: ['./toner-add-modal.component.css']
})
export class TonerAddModalComponent implements OnInit {
  @Input() clientId:number;
  toner:Toner;
  @ViewChild('modal') modalEle: ElementRef;

  constructor(@Inject(JQ_TOKEN) private $:any) { 

  }

  ngOnInit() {
    this.toner=new Toner(this.clientId);
  }

  add(){
    console.log("add toner:"+JSON.stringify(this.toner));
    this.close();
  }

  cancel(){
    this.close();
  }

  close(): void {
    this.toner=new Toner(this.clientId);
    this.$(this.modalEle.nativeElement).modal('hide');    
  }

}

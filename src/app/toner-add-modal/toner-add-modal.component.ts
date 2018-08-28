import { Component, OnInit, Input, ElementRef, Inject, ViewChild, Output, EventEmitter } from '@angular/core';
import { UiModalComponent } from '../ui-modal/ui-modal.component';
import { Toner } from '../models/toner';
import { TonerService } from '../toner.service';
import { SERVER_TRANSITION_PROVIDERS } from '@angular/platform-browser/src/browser/server-transition';

@Component({
  selector: 'app-toner-add-modal',
  templateUrl: './toner-add-modal.component.html',
  styleUrls: ['./toner-add-modal.component.css']
})
export class TonerAddModalComponent implements OnInit {
  @Input() clientId:number;
  @Output() newTonerEvent:EventEmitter<Toner>=new EventEmitter();
  @ViewChild(UiModalComponent) modal: UiModalComponent;
  toner:Toner=new Toner();

  constructor(private tonerService:TonerService) { 

  }

  ngOnInit() {
    this.initToner();
  }

  initToner(): void {
    this.toner=new Toner();
    this.toner.ClientId=this.clientId;
  }

  add(){
    console.log(this.toner);
    this.tonerService.addToner(this.toner).subscribe(t=>{
      this.newTonerEvent.emit(new Toner(t));
      this.close();
    });
    
  }

  cancel(){
    this.close();
  }

  close(): void {
    this.initToner();
    this.modal.close();    
  }

}

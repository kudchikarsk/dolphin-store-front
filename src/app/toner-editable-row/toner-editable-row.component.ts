import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Toner } from '../models/toner';
import { TonerService } from '../toner.service';

@Component({
  selector: 'app-toner-editable-row',
  templateUrl: './toner-editable-row.component.html',
  styleUrls: ['./toner-editable-row.component.css']
})
export class TonerEditableRowComponent implements OnInit {
  @Input() toner:Toner;
  @Output() deleteTonerEvent:EventEmitter<Toner>=new EventEmitter();
  edit:Toner;
  isEditable:boolean;
  constructor(private tonerService:TonerService) { }

  ngOnInit() {
    this.edit=new Toner(this.toner);
  }

  update(){
    this.tonerService.updateToner(this.edit).subscribe(t=>{
      this.toner.update(t);
      this.isEditable=false;
    });
  }

  cancel(){
    this.edit=new Toner(this.toner);
    this.isEditable=false;
  }

  delete(){
    this.tonerService.deleteToner(this.toner.Id).subscribe(r=>{
      this.deleteTonerEvent.emit(this.toner);
    });
  }

}

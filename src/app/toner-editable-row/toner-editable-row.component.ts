import { Component, OnInit, Input } from '@angular/core';
import { Toner } from '../models/toner';

@Component({
  selector: 'app-toner-editable-row',
  templateUrl: './toner-editable-row.component.html',
  styleUrls: ['./toner-editable-row.component.css']
})
export class TonerEditableRowComponent implements OnInit {
  @Input() toner:Toner;
  edit:Toner;
  isEditable:boolean;
  constructor() { }

  ngOnInit() {
    this.edit=this.toner.copy();
  }

  update(){
    this.toner.update(this.edit);
    console.log("update toner:"+JSON.stringify(this.toner));
    this.isEditable=false;
  }

  cancel(){
    this.edit=this.toner.copy();
    this.isEditable=false;
  }

}

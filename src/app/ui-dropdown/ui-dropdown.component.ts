import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ui-dropdown',
  templateUrl: './ui-dropdown.component.html',
  styleUrls: ['./ui-dropdown.component.css']
})
export class UiDropdownComponent implements OnInit {
  @Input() options:any;
  @Input() selectMessage:string;
  @Input() dropdownId:string;
  @Output() changeOption:EventEmitter<any>=new EventEmitter();
  selected:any;

  constructor() { }

  ngOnInit() {
  }

  select(value){
    this.selected=value;
    this.changeOption.emit(value);
  }

}

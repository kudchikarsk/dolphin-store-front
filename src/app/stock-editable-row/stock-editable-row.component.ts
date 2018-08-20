import { Component, OnInit, Input } from '@angular/core';
import { StockItem } from '../models/stock';

@Component({
  selector: 'app-stock-editable-row',
  templateUrl: './stock-editable-row.component.html',
  styleUrls: ['./stock-editable-row.component.css']
})
export class StockEditableRowComponent implements OnInit {
  @Input() stock:StockItem;
  edit:StockItem;
  isEditable:boolean;
  constructor() { }

  ngOnInit() {
    this.edit=this.stock.copy();
  }

  update(){
    this.stock.update(this.edit);
    console.log("stock update:"+JSON.stringify(this.stock));
    this.isEditable=false;
  }

  cancel(){
    this.edit=this.stock.copy();
    this.isEditable=false;
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { UiModalComponent } from '../ui-modal/ui-modal.component';
import { StockItem } from '../models/stock';

@Component({
  selector: 'app-stock-add-modal',
  templateUrl: './stock-add-modal.component.html',
  styleUrls: ['./stock-add-modal.component.css']
})
export class StockAddModalComponent implements OnInit {
  @ViewChild(UiModalComponent) modal:UiModalComponent;
  stockItem:StockItem;

  constructor() { 
    this.stockItem=new StockItem();
  }

  ngOnInit() {
  }

  add(){
    console.log("add stock:"+JSON.stringify(this.stockItem));
    this.close();
  }

  cancel(){
    this.close();
  }

  close(): void {
    this.stockItem=new StockItem();
    this.modal.close();
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StockItem } from '../models/stock';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-stock-editable-row',
  templateUrl: './stock-editable-row.component.html',
  styleUrls: ['./stock-editable-row.component.css']
})
export class StockEditableRowComponent implements OnInit {
  @Input() stockItem:StockItem;
  edit:StockItem;
  isEditable:boolean;
  @Output() deleteStockItemEvent:EventEmitter<StockItem>=new EventEmitter();

  constructor(private stockItemService:StockService) { }

  ngOnInit() {
    this.edit=new StockItem(this.stockItem);
  }
  
  delete(){
    this.stockItemService.deleteStockItem(this.stockItem.Id).subscribe(r=>{
      this.deleteStockItemEvent.emit(this.stockItem);
    });
  }

  update(){
    this.stockItemService.updateStockItem(this.edit).subscribe(e=>{
      this.stockItem.update(e);
      this.isEditable=false;
    });    
  }

  cancel(){
    this.edit=new StockItem(this.stockItem);
    this.isEditable=false;
  }

}

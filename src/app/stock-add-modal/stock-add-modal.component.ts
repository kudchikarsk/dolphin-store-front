import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { UiModalComponent } from '../ui-modal/ui-modal.component';
import { StockItem } from '../models/stock';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-stock-add-modal',
  templateUrl: './stock-add-modal.component.html',
  styleUrls: ['./stock-add-modal.component.css']
})
export class StockAddModalComponent implements OnInit {
  @ViewChild(UiModalComponent) modal:UiModalComponent;
  stockItem:StockItem;
  @Output() newStockItemEvent:EventEmitter<StockItem>=new EventEmitter();

  constructor(private stockItemService:StockService) { 
    this.stockItem=new StockItem();
  }

  ngOnInit() {
  }

  add(){
    console.log(this.stockItem);
    this.stockItemService.addStockItem(this.stockItem).subscribe(c=>{
      this.newStockItemEvent.emit(new StockItem(c));
      this.close();
    });
    
  }

  cancel(){
    this.close();
  }

  close(): void {
    this.stockItem=new StockItem();
    this.modal.close();    
  }

}

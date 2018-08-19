import { Component, OnInit, ElementRef, ViewChild, Inject } from '@angular/core';
import { StockItem } from '../../models/stock';
import { JQ_TOKEN } from '../../jquery.service';

@Component({
  selector: 'app-stock-add-modal',
  templateUrl: './stock-add-modal.component.html',
  styleUrls: ['./stock-add-modal.component.css']
})
export class StockAddModalComponent implements OnInit {
  stockItem:StockItem;
  @ViewChild("modal") modalEle:ElementRef;

  constructor(@Inject(JQ_TOKEN) private $:any) { 
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
    this.$(this.modalEle.nativeElement).modal('hide');    
  }

}

import { Component, OnInit } from '@angular/core';
import { StockItem } from '../models/stock';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
  stockItems:StockItem[];
  name:string;

  constructor(private stockService:StockService) { }

  ngOnInit() {
    this.stockService.getStockItems().subscribe(ss=>this.stockItems=ss.map(s=>new StockItem(s)));
  }

  removeStockItem(employee:StockItem){
    let index=this.stockItems.indexOf(employee);
    if(index>-1){
      this.stockItems.splice(index,1);
    }
  }

  search(){
    this.stockService.getStockItems(this.name).subscribe(es=>this.stockItems=es.map(e=>new StockItem(e)));
  }


}

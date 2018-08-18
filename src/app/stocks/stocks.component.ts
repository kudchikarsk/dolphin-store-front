import { Component, OnInit } from '@angular/core';
import { Stock } from '../models/stock';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
  stocks:Stock[];

  constructor(private stockService:StockService) { }

  ngOnInit() {
    this.stockService.getStocks().subscribe(s=>this.stocks=s);
  }

}

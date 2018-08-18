import { Component, OnInit } from '@angular/core';
import { StockItem } from '../models/stock';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {
  stock:StockItem=new StockItem();
  constructor(public location:Location) { }

  ngOnInit() {
  }

  add(){
    console.log(this.stock);
    this.location.back();
  }

}

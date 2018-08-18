import { Component, OnInit } from '@angular/core';
import { TonerPart } from '../models/stock';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-toner-parts',
  templateUrl: './toner-parts.component.html',
  styleUrls: ['./toner-parts.component.css']
})
export class TonerPartsComponent implements OnInit {
  tonerParts:TonerPart[]
  constructor(private stockServce:StockService) { }

  ngOnInit() {
    this.stockServce.getTonerParts().subscribe(t=>this.tonerParts=t);
  }

}

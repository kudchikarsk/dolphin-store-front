import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { TonerPart } from '../models/stock';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-toner-part-dropdown',
  templateUrl: './toner-part-dropdown.component.html',
  styleUrls: ['./toner-part-dropdown.component.css']
})
export class TonerPartDropdownComponent implements OnInit {
  @Input() tonerPartId:number;
  @Output() select:EventEmitter<TonerPart>=new EventEmitter<TonerPart>();
  selected:TonerPart;
  all:TonerPart[];
  constructor(private stockService:StockService) { 
    this.selected=new TonerPart();
    this.selected.Name="Select Toner Part";
  }

  ngOnInit() {
    this.stockService.getTonerParts().subscribe(t=>{
      this.all=t;
      if(this.tonerPartId>=1){
        this.selected=this.all.find(t=>t.Id==this.tonerPartId);
      }
      
    });
  }

  selectTonerPart(tonerPart:TonerPart){
    if(tonerPart==null || tonerPart.Id<=0) return;
    this.selected=tonerPart;
    this.select.emit(this.selected);
  }
}

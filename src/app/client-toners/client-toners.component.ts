import { Component, OnInit, Input } from '@angular/core';
import { Toner } from '../models/toner';
import { TonerService } from '../toner.service';

@Component({
  selector: 'app-client-toners',
  templateUrl: './client-toners.component.html',
  styleUrls: ['./client-toners.component.css']
})
export class ClientTonersComponent implements OnInit {

  @Input() clientId:number;
  toners:Toner[];
  name:string;

  constructor(private tonerService:TonerService) { }

  ngOnInit() {
    this.tonerService.getClientToners(this.clientId).subscribe(ts=>this.toners=ts.map(t=>new Toner(t)));
  }

  search(){
    console.log("search fired!");
    this.tonerService.getClientToners(this.clientId,this.name).subscribe(ts=>this.toners=ts.map(t=>new Toner(t)));
  }

  removeToner(toner:Toner){
    let index=this.toners.indexOf(toner);
    if(index>-1){
      this.toners.splice(index,1);
    }
  }

}

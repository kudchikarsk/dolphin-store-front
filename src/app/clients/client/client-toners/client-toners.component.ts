import { Component, OnInit, Input } from '@angular/core';
import { Toner } from './../../../models/toner';
import { ClientService } from './../../../client.service';

@Component({
  selector: 'app-client-toners',
  templateUrl: './client-toners.component.html',
  styleUrls: ['./client-toners.component.css']
})
export class ClientTonersComponent implements OnInit {

  @Input() clientId:number;
  toners:Toner[];

  constructor(private clientService:ClientService) { }

  ngOnInit() {
    this.clientService.getClientToners(this.clientId).subscribe(t=>this.toners=t);
  }

}

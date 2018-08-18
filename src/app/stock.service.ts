import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Stock, PartType, TonerPart } from './models/stock';
import { STOCKS, PARTS, TONER_PARTS } from './mocks/mock-stocks';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor() { }

  getStocks():Observable<Stock[]>{
    return of(STOCKS);
  }

  getStock(id:number):Observable<Stock>{
    return of(STOCKS.find(s=>s.Id==id));
  }

  getPartTypes():Observable<PartType[]>{
    return of(PARTS);
  }

  getPartType(id:number):Observable<PartType>{
    return of(PARTS.find(p=>p.Id==id));
  }

  getTonerParts():Observable<TonerPart[]>{
    return of(TONER_PARTS);
  }

  getTonerPart(id:number):Observable<TonerPart>{
    return of(TONER_PARTS.find(p=>p.Id==id));
  }
}

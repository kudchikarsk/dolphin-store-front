import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StockItem, TonerPart } from './models/stock';
import { STOCKS, TONER_PARTS } from './mocks/mock-stocks';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor() { }

  getStocks():Observable<StockItem[]>{
    return of(STOCKS);
  }

  getStock(id:number):Observable<StockItem>{
    return of(STOCKS.find(s=>s.Id==id));
  }

  getTonerParts():Observable<TonerPart[]>{
    return of(TONER_PARTS);
  }

  getTonerPart(id:number):Observable<TonerPart>{
    return of(TONER_PARTS.find(p=>p.Id==id));
  }
}

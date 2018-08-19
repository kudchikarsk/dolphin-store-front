import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StockItem } from './models/stock';
import { STOCKS } from './mocks/mock-stocks';

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
}

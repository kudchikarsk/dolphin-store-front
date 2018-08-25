import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StockItem } from './models/stock';
import { STOCKS } from './mocks/mock-stocks';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor() { }

  getStocks(name:string=null):Observable<StockItem[]>{
    return of(STOCKS.filter(s=> name==null || s.Name.toLocaleLowerCase().indexOf(name.toLocaleLowerCase())>-1));
  }

  getStock(id:number):Observable<StockItem>{
    return of(STOCKS.find(s=>s.Id==id));
  }
}

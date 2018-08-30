import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StockItem, IStockItem } from './models/stock';
import { STOCKS } from './mocks/mock-stocks';
import { environment } from '../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  
  stockItemURL:string=`${environment.apiEndpoint}stockitem`

  constructor(private http:HttpClient) { }

  getStockItems(name:string=null):Observable<IStockItem[]>
  {
    const options = name ?
     { params: new HttpParams().set('name', name) } : {};
  
    return this.http.get<IStockItem[]>(this.stockItemURL,options);
  }

  getStockItem(id:number):Observable<IStockItem>
  {
    return this.http.get<IStockItem>(`${this.stockItemURL}/${id}`);
  }

  addStockItem(stockItem:IStockItem):Observable<IStockItem> {
    return this.http.post<IStockItem>(this.stockItemURL,stockItem);
  }

  updateStockItem(stockItem: IStockItem):Observable<IStockItem> {
    return this.http.put<IStockItem>(`${this.stockItemURL}/${stockItem.Id}`,stockItem);
  }

  deleteStockItem(id: number): Observable<any> {
    return this.http.delete(`${this.stockItemURL}/${id}`);
  }  
}

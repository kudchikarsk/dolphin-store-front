import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Toner, IToner } from './models/toner';
import { TONERS } from './mocks/mock-toners';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TonerService {
  
  
  tonerURL:string=`${environment.apiEndpoint}toner`

  constructor(private http:HttpClient) { }

  get(tonerId: number): Observable<Toner> {
    return of(TONERS.find(t=>t.Id==tonerId));
  }

  getClientToners(clientId: number,name:string=null): Observable<IToner[]> {
    const options = name ?
    { params: new HttpParams().set('clientId', `${clientId}`).set('name', name) } : { params: new HttpParams().set('clientId', `${clientId}`) };

    return this.http.get<IToner[]>(`${this.tonerURL}`,options);
  }

  addToner(toner: Toner): Observable<IToner> {
    return this.http.post<IToner>(this.tonerURL,toner);
  }

  deleteToner(id:number): Observable<any> {
    return this.http.delete(`${this.tonerURL}/${id}`);
  }

  updateToner(toner: Toner): Observable<IToner> {
    return this.http.put<IToner>(`${this.tonerURL}/${toner.Id}`,toner);
  }
}

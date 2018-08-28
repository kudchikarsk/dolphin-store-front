import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IClient, Client } from './models/client';
import { Toner } from './models/toner';
import { CLIENTS } from './mocks/mock-clients';
import { TONERS } from './mocks/mock-toners';
import { environment } from '../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ClientService {
    
  url:string=`${environment.apiEndpoint}client`;

  constructor(private http:HttpClient) { }

  getClients(name:string=null):Observable<IClient[]>
  {
    const options = name ?
     { params: new HttpParams().set('name', name) } : {};
  
    return this.http.get<IClient[]>(this.url,options);
  }

  getClientToners(id:number):Observable<Toner[]>
  {
      return of(TONERS.filter(t=>t.ClientId==id));
  }

  getClient(id:number):Observable<IClient>
  {
    return this.http.get<IClient>(`${this.url}/${id}`);
  }

  addClient(client:IClient):Observable<IClient> {
    return this.http.post<IClient>(this.url,client);
  }

  updateClient(client: IClient):Observable<IClient> {
    return this.http.put<IClient>(`${this.url}/${client.Id}`,client);
  }

  deleteClient(id: number): any {
    return this.http.delete(`${this.url}/${id}`);
  }  
}

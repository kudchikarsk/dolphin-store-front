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
    
  clientURL:string=`${environment.apiEndpoint}client`;

  constructor(private http:HttpClient) { }

  getClients(name:string=null):Observable<IClient[]>
  {
    const options = name ?
     { params: new HttpParams().set('name', name) } : {};
  
    return this.http.get<IClient[]>(this.clientURL,options);
  }

  getClient(id:number):Observable<IClient>
  {
    return this.http.get<IClient>(`${this.clientURL}/${id}`);
  }

  addClient(client:IClient):Observable<IClient> {
    return this.http.post<IClient>(this.clientURL,client);
  }

  updateClient(client: IClient):Observable<IClient> {
    return this.http.put<IClient>(`${this.clientURL}/${client.Id}`,client);
  }

  deleteClient(id: number): Observable<any> {
    return this.http.delete(`${this.clientURL}/${id}`);
  }  
}

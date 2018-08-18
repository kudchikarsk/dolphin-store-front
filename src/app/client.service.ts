import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Client } from './models/client';
import { Toner } from './models/toner';
import { CLIENTS } from './mocks/mock-clients';
import { TONERS } from './mocks/mock-toners';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }

  getClients():Observable<Client[]>
  {
    return of(CLIENTS);
  }

  getClientToners(id:number):Observable<Toner[]>
  {
      return of(TONERS.filter(t=>t.ClientId==id));
  }

  get(id:number):Observable<Client>
  {
    return of(CLIENTS.find(c=>c.Id==id));
  }
}

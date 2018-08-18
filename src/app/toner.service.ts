import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Toner } from './models/toner';
import { TONERS } from './mocks/mock-toners';

@Injectable({
  providedIn: 'root'
})
export class TonerService {

  constructor() { }

  get(tonerId: number): Observable<Toner> {
    return of(TONERS.find(t=>t.Id==tonerId));
  }
}

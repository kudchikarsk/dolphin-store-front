import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TonerJob } from './models/toner-job';
import { TONER_JOBS } from './mocks/mock-toner-jobs';

@Injectable({
  providedIn: 'root'
})
export class TonerJobService {
  
  constructor() { }

  getTonerJobs(): Observable<TonerJob[]> {
    return of(TONER_JOBS);
  }
}

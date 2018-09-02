import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TonerJob, ITonerJob } from './models/toner-job';
import { environment } from '../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TonerJobService {
  
  tonerJobURL:string=`${environment.apiEndpoint}tonerjob`

  constructor(private http:HttpClient) { }

  getTonerJobs($in:Date=null,$out:Date=null):Observable<ITonerJob[]>
  {
    let options = {};

    if($in!=null && $out !=null){
      options={ params: new HttpParams().set('fromDate', $in.toDateString()).set('toDate', $out.toDateString()) };
    }
    else if($in!=null){
      options={ params: new HttpParams().set('fromDate', $in.toDateString()).set('toDate', $in.toDateString()) };
    }
  
    return this.http.get<ITonerJob[]>(this.tonerJobURL,options);
  }

  getTonerJob(id:number):Observable<ITonerJob>
  {
    return this.http.get<ITonerJob>(`${this.tonerJobURL}/${id}`);
  }

  addTonerJob(employee:ITonerJob):Observable<ITonerJob> {
    return this.http.post<ITonerJob>(this.tonerJobURL,employee);
  }

  updateTonerJob(employee: ITonerJob):Observable<ITonerJob> {
    return this.http.put<ITonerJob>(`${this.tonerJobURL}/${employee.Id}`,employee);
  }

  deleteTonerJob(id: number): Observable<any> {
    return this.http.delete(`${this.tonerJobURL}/${id}`);
  }  
}

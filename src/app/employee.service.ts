import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee, IEmployee } from './models/employee';
import { EMPLOYEES } from './mocks/mock-employees';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeeURL:string=`${environment.apiEndpoint}employee`

  constructor(private http:HttpClient) { }

  getEmployees(name:string=null):Observable<IEmployee[]>
  {
    const options = name ?
     { params: new HttpParams().set('name', name) } : {};
  
    return this.http.get<IEmployee[]>(this.employeeURL,options);
  }

  getEmployee(id:number):Observable<IEmployee>
  {
    return this.http.get<IEmployee>(`${this.employeeURL}/${id}`);
  }

  addEmployee(employee:IEmployee):Observable<IEmployee> {
    return this.http.post<IEmployee>(this.employeeURL,employee);
  }

  updateEmployee(employee: IEmployee):Observable<IEmployee> {
    return this.http.put<IEmployee>(`${this.employeeURL}/${employee.Id}`,employee);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.employeeURL}/${id}`);
  }  
}

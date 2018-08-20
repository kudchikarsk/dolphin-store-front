import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from './models/employee';
import { EMPLOYEES } from './mocks/mock-employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees():Observable<Employee[]>{
    return of(EMPLOYEES);
  }
}

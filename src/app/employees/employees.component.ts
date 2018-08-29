import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees:Employee[];
  name:string;

  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(es=>this.employees=es.map(e=>new Employee(e)));
  }

  removeEmployee(employee:Employee){
    let index=this.employees.indexOf(employee);
    if(index>-1){
      this.employees.splice(index,1);
    }
  }

  search(){
    this.employeeService.getEmployees(this.name).subscribe(es=>this.employees=es.map(e=>new Employee(e)));
  }

}

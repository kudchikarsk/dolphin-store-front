import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-editable-row',
  templateUrl: './employee-editable-row.component.html',
  styleUrls: ['./employee-editable-row.component.css']
})
export class EmployeeEditableRowComponent implements OnInit {

  @Input() employee:Employee;
  edit:Employee;
  isEditable:boolean;
  @Output() deleteEmployeeEvent:EventEmitter<Employee>=new EventEmitter();

  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {
    this.edit=new Employee(this.employee);
  }
  
  delete(){
    this.employeeService.deleteEmployee(this.employee.Id).subscribe(r=>{
      this.deleteEmployeeEvent.emit(this.employee);
    });
  }

  update(){
    this.employeeService.updateEmployee(this.edit).subscribe(e=>{
      this.employee.update(e);
      this.isEditable=false;
    });    
  }

  cancel(){
    this.edit=new Employee(this.employee);
    this.isEditable=false;
  }

}

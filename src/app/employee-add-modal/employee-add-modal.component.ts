import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { UiModalComponent } from '../ui-modal/ui-modal.component';
import { Employee } from '../models/employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-add-modal',
  templateUrl: './employee-add-modal.component.html',
  styleUrls: ['./employee-add-modal.component.css']
})
export class EmployeeAddModalComponent implements OnInit {
  @ViewChild(UiModalComponent) modal:UiModalComponent;
  employee:Employee;
  @Output() newEmployeeEvent:EventEmitter<Employee>=new EventEmitter();

  constructor(private employeeService:EmployeeService) { 
    this.employee=new Employee();
  }

  ngOnInit() {
  }

  add(){
    console.log(this.employee);
    this.employeeService.addEmployee(this.employee).subscribe(c=>{
      this.newEmployeeEvent.emit(new Employee(c));
      this.close();
    });
    
  }

  cancel(){
    this.close();
  }

  close(): void {
    this.employee=new Employee();
    this.modal.close();    
  }
}

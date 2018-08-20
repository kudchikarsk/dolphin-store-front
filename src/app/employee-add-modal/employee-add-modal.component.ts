import { Component, OnInit, ViewChild } from '@angular/core';
import { UiModalComponent } from '../ui-modal/ui-modal.component';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-employee-add-modal',
  templateUrl: './employee-add-modal.component.html',
  styleUrls: ['./employee-add-modal.component.css']
})
export class EmployeeAddModalComponent implements OnInit {
  @ViewChild(UiModalComponent) modal:UiModalComponent;
  employee:Employee;

  constructor() { 
    this.employee=new Employee(undefined,"Mr.");
  }

  ngOnInit() {
  }

  add(){
    console.log("add employee:"+JSON.stringify(this.employee));
    this.close();
  }

  cancel(){
    this.close();
  }

  close(): void {
    this.employee=new Employee(undefined,"Mr.");
    this.modal.close();    
  }
}

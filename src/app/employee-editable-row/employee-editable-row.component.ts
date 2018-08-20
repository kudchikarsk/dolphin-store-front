import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-employee-editable-row',
  templateUrl: './employee-editable-row.component.html',
  styleUrls: ['./employee-editable-row.component.css']
})
export class EmployeeEditableRowComponent implements OnInit {

  @Input() employee:Employee;
  edit:Employee;
  isEditable:boolean;
  constructor() { }

  ngOnInit() {
    this.edit=this.employee.copy();
  }

  update(){
    this.employee.update(this.edit);
    console.log("update employee:"+JSON.stringify(this.employee));
    this.isEditable=false;
  }

  cancel(){
    this.edit=this.employee.copy();    
    this.isEditable=false;
  }

}

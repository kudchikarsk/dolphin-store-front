import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeEditableRowComponent } from './employee-editable-row.component';

describe('EmployeeEditableRowComponent', () => {
  let component: EmployeeEditableRowComponent;
  let fixture: ComponentFixture<EmployeeEditableRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeEditableRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeEditableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

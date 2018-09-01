import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TonerJobEditableRowComponent } from './toner-job-editable-row.component';

describe('TonerJobEditableRowComponent', () => {
  let component: TonerJobEditableRowComponent;
  let fixture: ComponentFixture<TonerJobEditableRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TonerJobEditableRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TonerJobEditableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TonerEditableRowComponent } from './toner-editable-row.component';

describe('TonerEditableRowComponent', () => {
  let component: TonerEditableRowComponent;
  let fixture: ComponentFixture<TonerEditableRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TonerEditableRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TonerEditableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

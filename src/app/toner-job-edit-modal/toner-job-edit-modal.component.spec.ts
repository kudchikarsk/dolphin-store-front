import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TonerJobEditModalComponent } from './toner-job-edit-modal.component';

describe('TonerJobEditModalComponent', () => {
  let component: TonerJobEditModalComponent;
  let fixture: ComponentFixture<TonerJobEditModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TonerJobEditModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TonerJobEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

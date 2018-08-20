import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TonerJobsComponent } from './toner-jobs.component';

describe('TonerJobsComponent', () => {
  let component: TonerJobsComponent;
  let fixture: ComponentFixture<TonerJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TonerJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TonerJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TonerJobAddModalComponent } from './toner-job-add-modal.component';

describe('TonerJobAddModalComponent', () => {
  let component: TonerJobAddModalComponent;
  let fixture: ComponentFixture<TonerJobAddModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TonerJobAddModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TonerJobAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

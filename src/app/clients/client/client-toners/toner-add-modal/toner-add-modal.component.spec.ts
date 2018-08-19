import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TonerAddModalComponent } from './toner-add-modal.component';

describe('TonerAddModalComponent', () => {
  let component: TonerAddModalComponent;
  let fixture: ComponentFixture<TonerAddModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TonerAddModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TonerAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

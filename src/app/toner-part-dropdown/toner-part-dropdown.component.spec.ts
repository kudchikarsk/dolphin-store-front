import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TonerPartDropdownComponent } from './toner-part-dropdown.component';

describe('TonerPartDropdownComponent', () => {
  let component: TonerPartDropdownComponent;
  let fixture: ComponentFixture<TonerPartDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TonerPartDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TonerPartDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

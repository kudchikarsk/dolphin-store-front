import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TonerPartsComponent } from './toner-parts.component';

describe('TonerPartsComponent', () => {
  let component: TonerPartsComponent;
  let fixture: ComponentFixture<TonerPartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TonerPartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TonerPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

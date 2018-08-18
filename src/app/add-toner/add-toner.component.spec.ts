import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTonerComponent } from './add-toner.component';

describe('AddTonerComponent', () => {
  let component: AddTonerComponent;
  let fixture: ComponentFixture<AddTonerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTonerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTonerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

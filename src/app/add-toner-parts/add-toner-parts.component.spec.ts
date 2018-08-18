import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTonerPartsComponent } from './add-toner-parts.component';

describe('AddTonerPartsComponent', () => {
  let component: AddTonerPartsComponent;
  let fixture: ComponentFixture<AddTonerPartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTonerPartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTonerPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

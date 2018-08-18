import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTonerPartsComponent } from './edit-toner-parts.component';

describe('EditTonerPartsComponent', () => {
  let component: EditTonerPartsComponent;
  let fixture: ComponentFixture<EditTonerPartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTonerPartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTonerPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

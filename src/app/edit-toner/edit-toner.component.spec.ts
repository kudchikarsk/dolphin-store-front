import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTonerComponent } from './edit-toner.component';

describe('EditTonerComponent', () => {
  let component: EditTonerComponent;
  let fixture: ComponentFixture<EditTonerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTonerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTonerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

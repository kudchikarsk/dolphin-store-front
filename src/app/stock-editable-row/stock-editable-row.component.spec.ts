import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockEditableRowComponent } from './stock-editable-row.component';

describe('StockEditableRowComponent', () => {
  let component: StockEditableRowComponent;
  let fixture: ComponentFixture<StockEditableRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockEditableRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockEditableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

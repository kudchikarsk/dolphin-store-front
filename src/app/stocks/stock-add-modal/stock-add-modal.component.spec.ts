import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockAddModalComponent } from './stock-add-modal.component';

describe('StockAddModalComponent', () => {
  let component: StockAddModalComponent;
  let fixture: ComponentFixture<StockAddModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockAddModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

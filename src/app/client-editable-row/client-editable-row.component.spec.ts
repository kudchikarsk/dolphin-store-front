import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientEditableRowComponent } from './client-editable-row.component';

describe('ClientEditableRowComponent', () => {
  let component: ClientEditableRowComponent;
  let fixture: ComponentFixture<ClientEditableRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientEditableRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientEditableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

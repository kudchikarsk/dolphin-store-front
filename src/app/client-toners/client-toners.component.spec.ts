import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientTonersComponent } from './client-toners.component';

describe('ClientTonersComponent', () => {
  let component: ClientTonersComponent;
  let fixture: ComponentFixture<ClientTonersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientTonersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientTonersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

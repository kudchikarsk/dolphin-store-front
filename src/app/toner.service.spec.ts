import { TestBed, inject } from '@angular/core/testing';

import { TonerService } from './toner.service';

describe('TonerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TonerService]
    });
  });

  it('should be created', inject([TonerService], (service: TonerService) => {
    expect(service).toBeTruthy();
  }));
});

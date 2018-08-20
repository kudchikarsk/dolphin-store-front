import { TestBed, inject } from '@angular/core/testing';

import { TonerJobService } from './toner-job.service';

describe('TonerJobService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TonerJobService]
    });
  });

  it('should be created', inject([TonerJobService], (service: TonerJobService) => {
    expect(service).toBeTruthy();
  }));
});

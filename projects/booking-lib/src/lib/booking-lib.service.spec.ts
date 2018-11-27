import { TestBed } from '@angular/core/testing';

import { BookingLibService } from './booking-lib.service';

describe('BookingAppService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookingLibService = TestBed.get(BookingLibService);
    expect(service).toBeTruthy();
  });
});

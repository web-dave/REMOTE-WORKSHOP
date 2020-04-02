import { TestBed } from '@angular/core/testing';

import { StayHereGuard } from './stay-here.guard';

describe('StayHereGuard', () => {
  let service: StayHereGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StayHereGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

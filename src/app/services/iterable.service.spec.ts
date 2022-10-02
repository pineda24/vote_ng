import { TestBed } from '@angular/core/testing';

import { IterableService } from './iterable.service';

describe('IterableService', () => {
  let service: IterableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IterableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

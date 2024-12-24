import { TestBed } from '@angular/core/testing';

import { ComonserviceService } from './comonservice.service';

describe('ComonserviceService', () => {
  let service: ComonserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComonserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

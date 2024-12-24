import { TestBed } from '@angular/core/testing';

import { AddApartementService } from './add-apartement.service';

describe('AddApartementService', () => {
  let service: AddApartementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddApartementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

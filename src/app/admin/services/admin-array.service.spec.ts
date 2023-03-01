import { TestBed } from '@angular/core/testing';

import { AdminArrayService } from './admin-array.service';

describe('AdminArrayService', () => {
  let service: AdminArrayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminArrayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

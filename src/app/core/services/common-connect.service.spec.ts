import { TestBed } from '@angular/core/testing';

import { CommonConnectService } from './common-connect.service';

describe('CommonConnectService', () => {
  let service: CommonConnectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonConnectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

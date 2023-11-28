import { TestBed } from '@angular/core/testing';

import { AtuthenticationService } from './atuthentication.service';

describe('AtuthenticationService', () => {
  let service: AtuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

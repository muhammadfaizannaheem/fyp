import { TestBed } from '@angular/core/testing';

import { CvAPIService } from './cv-api.service';

describe('CvAPIService', () => {
  let service: CvAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CvAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

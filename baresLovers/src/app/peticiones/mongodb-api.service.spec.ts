import { TestBed } from '@angular/core/testing';

import { MongodbAPIService } from './mongodb-api.service';

describe('MongodbAPIService', () => {
  let service: MongodbAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MongodbAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { MoviesFetchService } from './movies-fetch.service';

describe('MoviesFetchService', () => {
  let service: MoviesFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

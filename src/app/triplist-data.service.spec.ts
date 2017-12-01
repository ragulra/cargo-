import { TestBed, inject } from '@angular/core/testing';

import { TriplistDataService } from './triplist-data.service';

describe('TriplistDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TriplistDataService]
    });
  });

  it('should be created', inject([TriplistDataService], (service: TriplistDataService) => {
    expect(service).toBeTruthy();
  }));
});

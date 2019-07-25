import { TestBed } from '@angular/core/testing';

import { GoogleCampaingService } from './google-campaing.service';

describe('GoogleCampaingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoogleCampaingService = TestBed.get(GoogleCampaingService);
    expect(service).toBeTruthy();
  });
});

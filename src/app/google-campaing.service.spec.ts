import { TestBed } from "@angular/core/testing";

import { GoogleCampaingService } from "./google-campaing.service";
import { HttpClientModule } from "@angular/common/http";

describe("GoogleCampaingService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({ imports: [HttpClientModule] })
  );

  it("should be created", () => {
    const service: GoogleCampaingService = TestBed.get(GoogleCampaingService);
    expect(service).toBeTruthy();
  });
});

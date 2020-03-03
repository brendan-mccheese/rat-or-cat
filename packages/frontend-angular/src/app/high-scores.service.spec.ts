import { TestBed } from "@angular/core/testing";

import { HighScoresService } from "./high-scores.service";
import { HttpClient } from "@angular/common/http";

describe("HighScoresService", () => {
    beforeEach(() => TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient,
          useValue: {}
        }
      ]
    }));

    it("should be created", () => {
        const service: HighScoresService = TestBed.get(HighScoresService);
        expect(service).toBeTruthy();
    });
});

import { TestBed } from "@angular/core/testing";

import { ImageService } from "./image.service";
import { HttpClient } from "@angular/common/http";

describe("ImageService", () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: HttpClient,
                    useValue: {},
                },
            ],
        }),
    );

    it("should be created", () => {
        const service: ImageService = TestBed.get(ImageService);
        expect(service).toBeTruthy();
    });
});

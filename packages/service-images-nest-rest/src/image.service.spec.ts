import { ImageService } from "./image.service";
import * as fs from "fs";

describe("ImageService", () => {
    beforeEach(async () => {
        jest.spyOn(fs, "readdirSync").mockImplementation(() => ["IMAGE_PATH"] as any);
    });

    test("returns random cat image path", () => {
        const result = new ImageService().getRandomCatImagePath();
        expect(result).toEqual("/image/cat/IMAGE_PATH");
    });

    test("returns random rat image path", () => {
        const result = new ImageService().getRandomRatImagePath();
        expect(result).toEqual("/image/rat/IMAGE_PATH");
    });
});

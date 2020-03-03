import { Test, TestingModule } from "@nestjs/testing";
import { ImageController } from "./image.controller";
import { ImageService } from "./image.service";

describe("ImageController", () => {
    let imageController: ImageController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [ImageController],
            providers: [
                {
                    provide: ImageService,
                    useValue: {
                        getRandomCatImagePath(): string {
                            return "CAT_PATH";
                        },
                        getRandomRatImagePath() {
                            return "RAT_PATH";
                        },
                    } as ImageService,
                },
            ],
        }).compile();

        imageController = app.get<ImageController>(ImageController);
    });

    describe("root", () => {
        it("should return a cat image", () => {
            expect(imageController.getCatImage()).toEqual(
                expect.objectContaining({
                    path: "CAT_PATH",
                    type: "CAT",
                }),
            );
        });

        it("should return rat image", () => {
            expect(imageController.getRatImage()).toEqual(
                expect.objectContaining({
                    path: "RAT_PATH",
                    type: "RAT",
                }),
            );
        });
    });
});

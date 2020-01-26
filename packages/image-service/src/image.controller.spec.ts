import { Test, TestingModule } from "@nestjs/testing";
import { ImageController } from "./image.controller";
import { ImageService } from "./image.service";

describe("AppController", () => {
    let appController: ImageController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [ImageController],
            providers: [
                {
                    provide: ImageService,
                    useValue: {
                        getCatImage(): string {
                            return "CAT";
                        },
                        getRatImage() {
                            return "RAT";
                        },
                    } as ImageService,
                },
            ],
        }).compile();

        appController = app.get<ImageController>(ImageController);
    });

    describe("root", () => {
        it("should return a cat image", () => {
            expect(appController.getCatImage()).toBe("CAT");
        });

        it("should return rat image", () => {
            expect(appController.getRatImage()).toBe("RAT");
        });
    });
});

import { Controller, Get } from "@nestjs/common";
import { ImageService } from "./image.service";

/**
 * Controller for handling image requests
 */
@Controller()
export class ImageController {
    constructor(private readonly imageService: ImageService) {
    }

    /**
     * Get an image of a cat.
     */
    @Get("/cat-image")
    getCatImage(): string {
        return this.imageService.getCatImage();
    }

    /**
     * Get an image of a rat.
     */
    @Get("/rat-image")
    getRatImage(): string {
        return this.imageService.getRatImage();
    }
}

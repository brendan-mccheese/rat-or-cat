import { Controller, Get, Param, Res } from "@nestjs/common";
import { ImageService } from "./image.service";

interface ImageResponse {
    path: string;
    type: "CAT" | "RAT";
}

/**
 * Controller for handling image requests
 */
@Controller()
export class ImageController {
    constructor(private readonly imageService: ImageService) {}

    /**
     * Get an image of a cat.
     */
    @Get("/cat-image")
    getCatImage(): ImageResponse {
        return {
            path: this.imageService.getRandomCatImagePath(),
            type: "CAT",
        };
    }

    /**
     * Get an image of a rat.
     */
    @Get("/rat-image")
    getRatImage(): ImageResponse {
        return {
            path: this.imageService.getRandomRatImagePath(),
            type: "RAT",
        };
    }

    @Get("/image/:type/:name")
    getImage(@Param("type") type: string, @Param("name") name: string, @Res() res) {
        const path = `${type}/${name}`;
        return res.sendFile(path, { root: "public" });
    }
}

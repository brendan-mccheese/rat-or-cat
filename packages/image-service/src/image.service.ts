import { Injectable } from "@nestjs/common";

/**
 * Image handling service.
 */
@Injectable()
export class ImageService {
    getCatImage(): string {
        return "CAT";
    }

    getRatImage(): string {
        return "RAT";
    }
}

import { Injectable } from "@nestjs/common";
import * as fs from "fs";
import { join } from "path";

/**
 * Image handling service.
 */
@Injectable()
export class ImageService {
    private readonly cats: string[];
    private readonly rats: string[];

    constructor() {
        this.cats = fs.readdirSync(join(__dirname, "..", "public", "cat"));
        this.rats = fs.readdirSync(join(__dirname, "..", "public", "rat"));
    }

    getRandomCatImagePath(): string {
        return `/image/cat/${this.cats[this.getRandomIndex(this.cats)]}`;
    }

    getRandomRatImagePath(): string {
        return `/image/rat/${this.rats[this.getRandomIndex(this.rats)]}`;
    }

    private getRandomIndex(array: string[]) {
        const max = array.length;
        return Math.floor(Math.random() * max);
    }
}

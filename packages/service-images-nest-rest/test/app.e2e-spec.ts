import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common";
import * as request from "supertest";
import { AppModule } from "../src/app.module";

describe("AppController (e2e)", () => {
    let app: INestApplication;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    it("/cat-image (GET)", () => {
        return request(app.getHttpServer())
            .get("/cat-image")
            .expect(200)
            .expect("CAT");
    });

    it("/rat-image (GET)", () => {
        return request(app.getHttpServer())
            .get("/rat-image")
            .expect(200)
            .expect("RAT");
    });
});

import supertest from "supertest";
import app from "../server";

describe('highscores api', () => {
    /**
     * @type {supertest.SuperTest}
     */
    let request;
    beforeEach(() => {
        request = supertest(app);
    });
    test('POST a highscore', async () => {
        await request
            .post("/high-score")
            .send({
                username: "moo",
                score: 100
            }).expect(200, {
                username: "moo",
                score: 100
            });
    });
});

import { Highscore } from "../model/high-score";
import { highscoreCollection } from "./collections";

/**
 *
 * @param {Highscore} highscore
 * @returns {Promise<void>}
 */
export const upsertHighscore = async highscore => {
    if (!highscore instanceof Highscore) {
        throw new Error("highscore needs to be of type Highscore");
    }
    await highscoreCollection.findOneAndReplace({ username: highscore.username }, {
        username: highscore.username,
        score: highscore.score
    }, {
        upsert: true
    });
};

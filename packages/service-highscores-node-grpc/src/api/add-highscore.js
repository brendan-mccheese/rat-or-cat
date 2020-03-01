import { Highscore } from "../model/high-score";
import { upsertHighscore } from "../store/upsert-highscore";

/**
 * Add or update a highscore.
 * @param highscore
 * @returns {Promise<void>}
 */
export const addHighscore = async highscore => {
    try {
        const score = new Highscore(highscore.username, highscore.score);
        await upsertHighscore(score);
    } catch(err) {
        apiGatewayLogger.error({err}, "Error adding highscore");
    }
}

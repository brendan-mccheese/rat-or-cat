import { Highscore } from "../model/high-score";
import { highScoreCollection } from "./collections";
import { highScoresLogger } from "../high-scores-logger";

/**
 * Adds a new high score.
 * @param {Highscore} highScore
 * @returns {Promise<void>}
 */
export const addHighScore = async highScore => {
    if (!highScore instanceof Highscore) {
        throw new Error("highScore needs to be of type Highscore");
    }
    try {
        const result = await highScoreCollection.insertOne({
            username: highScore.username,
            score: highScore.score,
            timestamp: highScore.timestamp
        });
        return {
            _id: result.insertedId,
            ...result.ops[0]
        };
    } catch (err) {
        highScoresLogger.error({err}, "Error inserting new high score");
        throw err;
    }
};

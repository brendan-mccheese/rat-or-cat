import { Highscore } from "../model/high-score";
import * as store from "../store/add-high-score";
import { highScoresLogger } from "../high-scores-logger";
import * as messages from "../grpc/highscore-service_pb";

/**
 * @type {IHighScoresServer.addHighScore}
 * @param call
 * @param callback
 */
export const addHighScore = async (/** @type {HighScore} */ call, callback) => {
    /** @type {HighScore.AsObject} */
    let newScore = call.request.toObject();
    highScoresLogger.info({ score: newScore }, "Adding new high score");
    let highscore = new Highscore(newScore.username, newScore.score, new Date(newScore.timestamp));
    const responseMessage = new messages.AddHighScoreResponse();
    if (!highscore.errors.length) {
        const result = await store.addHighScore(highscore);
        const newScoreMessage = new messages.HighScore();
        newScoreMessage.setUsername(result.username);
        newScoreMessage.setScore(result.score);
        newScoreMessage.setId(result._id);
        responseMessage.setInserted(newScoreMessage);
    }
    responseMessage.setErrorsList(highscore.errors);
    callback(null, responseMessage);
};

import { initMongo } from "./store/init";
import { highScoresLogger } from "./high-scores-logger";
import { upsertHighscore } from "./store/upsert-highscore";
import { Highscore } from "./model/high-score";

const grpc = require("grpc");
const highscores = require("./grpc/highscore-service_grpc_pb");
const messages = require("./grpc/highscore-service_pb");

const server = new grpc.Server();

/**
 * @type {IHighScoresServer.addHighScore}
 * @param call
 * @param callback
 */
const addHighScore = async (/** @type {HighScore} */ call, callback) => {
    const response = new messages.HighScore();
    /** @type {HighScore.AsObject} */
    let newScore = call.request.toObject();
    highScoresLogger.info({ score: newScore });
    await upsertHighscore(new Highscore(newScore.username, newScore.score));
    callback(null, response);
};

initMongo(process.env.MONGO_URL).then(() => {
    // gRPC service
    server.addService(highscores.HighScoresService, {
        addHighScore,
    });
    // gRPC server
    let host = "0.0.0.0:50051";
    server.bind(host, grpc.ServerCredentials.createInsecure());
    server.start();
    highScoresLogger.info({ host }, "High scores service is up");
}).catch(err => highScoresLogger.error({err}));

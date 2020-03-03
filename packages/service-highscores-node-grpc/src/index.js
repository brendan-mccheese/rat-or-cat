import { initMongo } from "./store/init";
import { highScoresLogger } from "./high-scores-logger";
import { addHighScore } from "./api/add-highscore";
import * as grpc from "grpc";
import * as highscores from "./grpc/highscore-service_grpc_pb";

const server = new grpc.Server();

initMongo(process.env.MONGO_URL).then(() => {
    // gRPC service
    server.addService(highscores.HighScoresServiceService, {
        addHighScore,
    });
    // gRPC server
    let host = "0.0.0.0:50051";
    server.bind(host, grpc.ServerCredentials.createInsecure());
    server.start();
    highScoresLogger.info({ host }, "High scores service is up");
}).catch(err => highScoresLogger.error({err}));

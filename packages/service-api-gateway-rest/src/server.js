import express from "express";
import grpcHighScores from "./grpc/highscore-service_grpc_pb";
import messages from "./grpc/highscore-service_pb";
import grpc from "grpc";
import { apiGatewayLogger } from "./api-gateway-logger";

const app = express();

app.post("/high-score", (req, res) => {
    const client = new grpcHighScores.HighScoresClient('localhost:50051', grpc.credentials.createInsecure());
    const data = new messages.HighScore();
    data.setId("foo");
    client.addHighScore(data, (err, result) => {
        if (err) {
           apiGatewayLogger.error({err}, "Error adding high score");
           return res.status(500);
        }
        res.json(result.toObject());
    });
});

module.exports = app;

import express from "express";
import grpcHighScores from "./grpc/highscore-service_grpc_pb";
import messages from "./grpc/highscore-service_pb";
import grpc from "grpc";
import { apiGatewayLogger } from "./api-gateway-logger";
import bodyParser from "body-parser";
import request from "request";

const app = express();

app.use(bodyParser.json({ strict: true }));

const highScoresClient = new grpcHighScores.HighScoresClient("localhost:50051", grpc.credentials.createInsecure());
const imageClient = request.defaults({
    baseUrl: "http://localhost:3000",
});

app.post("/high-score", (req, res) => {
    const data = new messages.HighScore();
    data.setId("foo");
    highScoresClient.addHighScore(data, (err, result) => {
        if (err) {
            apiGatewayLogger.error({ err }, "Error adding high score");
            return res.sendStatus(500);
        }
        res.json(result.toObject());
    });
});

app.get("/image-data/cat", (req, res) => {
    imageClient
        .get({
            url: "/cat-image",
        })
        .pipe(res);
});

app.get("/image-data/rat", (req, res) => {
    imageClient
        .get({
            url: "/rat-image",
        })
        .pipe(res);
});

app.get("/image/*", (req, res) => {
    imageClient
        .get({
            url: req.path,
        })
        .pipe(res);
});

module.exports = app;

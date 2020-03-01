import grpcHighScores from "../grpc/highscore-service_grpc_pb";
import grpc from "grpc";
import messages from "../grpc/highscore-service_pb";
import { apiGatewayLogger } from "../api-gateway-logger";

/**
 * Configure proxying routes for high scores.
 * @param app
 */
export const configureHighScoresRoutes = (app) => {
    let clientAddress = process.env.HIGH_SCORES_API_URI || "localhost:50051";
    apiGatewayLogger.info({clientAddress}, `Configuring high scores routing`);
    const highScoresClient = new grpcHighScores.HighScoresClient(clientAddress, grpc.credentials.createInsecure());

    app.post("/high-score", (req, res) => {
        const data = new messages.HighScore();
        data.setScore(req.body.score);
        data.setUsername(req.body.username);
        highScoresClient.addHighScore(data, (err, result) => {
            if (err) {
                apiGatewayLogger.error({ err }, "Error adding high score");
                return res.sendStatus(500);
            }
            res.json(result.toObject());
        });
    });
};

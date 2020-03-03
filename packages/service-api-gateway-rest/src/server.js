import express from "express";
import bodyParser from "body-parser";
import { configureImageDataRoutes } from "./routes/image-data";
import { configureHighScoresRoutes } from "./routes/high-scores";

export const app = express();
app.use(bodyParser.json({ strict: true }));
configureHighScoresRoutes(app);
configureImageDataRoutes(app);



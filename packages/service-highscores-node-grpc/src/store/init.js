import { MongoClient } from "mongodb";
import { initCollections } from "./collections";
import { highScoresLogger } from "../high-scores-logger";

/**
 * Init mongo and collections.
 */
export const initMongo = async (connectionString) => {
    const client = await MongoClient.connect(connectionString, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    initCollections(client.db());
    highScoresLogger.info("Initialized mongo collections");
};

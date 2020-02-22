import { MongoClient } from "mongodb";
import { initCollections } from "./collections";
import { apiGatewayLogger } from "../api-gateway-logger";

/**
 * Init mongo and collections.
 */
export const initMongo = async (connectionString) => {
    const client = await MongoClient.connect(connectionString, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    initCollections(client.db());
    apiGatewayLogger.info("Initialized mongo collections");
};

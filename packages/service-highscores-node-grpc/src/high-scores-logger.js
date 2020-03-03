import * as bunyan from "bunyan";

export const highScoresLogger = bunyan.createLogger({
    name: "high-scores-service",
    serializers: bunyan.stdSerializers
});
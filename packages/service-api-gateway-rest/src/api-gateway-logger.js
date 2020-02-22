const bunyan = require("bunyan");

export const apiGatewayLogger = bunyan.createLogger({
    name: "rat-or-cat-service-highscores",
    serializers: bunyan.stdSerializers
});

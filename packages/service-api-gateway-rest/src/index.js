import app from "./server";
import { apiGatewayLogger } from "./api-gateway-logger";
import swaggerUI from "swagger-ui-express";
import yamljs from "yamljs";

let port = process.env.PORT || 3000;

app.use("/docs", swaggerUI.serve, swaggerUI.setup(yamljs.load(`${__dirname}/open-api.yml`)));

app.listen(port, () => {
    apiGatewayLogger.info(`Express API gateway listening on port ${port}`);
});

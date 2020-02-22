const grpc = require("grpc");
const highscores = require("./highscore-service_grpc_pb");
const messages = require("./highscore-service_pb");

const server = new grpc.Server();
// gRPC service
server.addService(highscores.HighScoresService, {
    addHighScore: (call, callback) => {
        console.log(call.request.id);
        const response = new messages.HighScore();
        response.setId("foo");
        callback(null, response);
    },
});
// gRPC server
server.bind("localhost:50051", grpc.ServerCredentials.createInsecure());
server.start();
console.log("gRPC server running at http://127.0.0.1:50051");

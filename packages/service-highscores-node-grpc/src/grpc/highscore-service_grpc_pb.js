// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var highscore$service_pb = require('./highscore-service_pb.js');

function serialize_HighScores_HighScore(arg) {
  if (!(arg instanceof highscore$service_pb.HighScore)) {
    throw new Error('Expected argument of type HighScores.HighScore');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_HighScores_HighScore(buffer_arg) {
  return highscore$service_pb.HighScore.deserializeBinary(new Uint8Array(buffer_arg));
}


var HighScoresService = exports.HighScoresService = {
  addHighScore: {
    path: '/HighScores.HighScores/AddHighScore',
    requestStream: false,
    responseStream: false,
    requestType: highscore$service_pb.HighScore,
    responseType: highscore$service_pb.HighScore,
    requestSerialize: serialize_HighScores_HighScore,
    requestDeserialize: deserialize_HighScores_HighScore,
    responseSerialize: serialize_HighScores_HighScore,
    responseDeserialize: deserialize_HighScores_HighScore,
  },
};

exports.HighScoresClient = grpc.makeGenericClientConstructor(HighScoresService);

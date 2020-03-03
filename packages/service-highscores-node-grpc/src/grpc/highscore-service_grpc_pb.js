// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var highscore$service_pb = require('./highscore-service_pb.js');

function serialize_HighScores_AddHighScoreResponse(arg) {
  if (!(arg instanceof highscore$service_pb.AddHighScoreResponse)) {
    throw new Error('Expected argument of type HighScores.AddHighScoreResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_HighScores_AddHighScoreResponse(buffer_arg) {
  return highscore$service_pb.AddHighScoreResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_HighScores_AllHighScoresResponse(arg) {
  if (!(arg instanceof highscore$service_pb.AllHighScoresResponse)) {
    throw new Error('Expected argument of type HighScores.AllHighScoresResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_HighScores_AllHighScoresResponse(buffer_arg) {
  return highscore$service_pb.AllHighScoresResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_HighScores_GetAllHighScoresParams(arg) {
  if (!(arg instanceof highscore$service_pb.GetAllHighScoresParams)) {
    throw new Error('Expected argument of type HighScores.GetAllHighScoresParams');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_HighScores_GetAllHighScoresParams(buffer_arg) {
  return highscore$service_pb.GetAllHighScoresParams.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_HighScores_NewHighScore(arg) {
  if (!(arg instanceof highscore$service_pb.NewHighScore)) {
    throw new Error('Expected argument of type HighScores.NewHighScore');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_HighScores_NewHighScore(buffer_arg) {
  return highscore$service_pb.NewHighScore.deserializeBinary(new Uint8Array(buffer_arg));
}


var HighScoresServiceService = exports.HighScoresServiceService = {
  getAllHighScores: {
    path: '/HighScores.HighScoresService/GetAllHighScores',
    requestStream: false,
    responseStream: false,
    requestType: highscore$service_pb.GetAllHighScoresParams,
    responseType: highscore$service_pb.AllHighScoresResponse,
    requestSerialize: serialize_HighScores_GetAllHighScoresParams,
    requestDeserialize: deserialize_HighScores_GetAllHighScoresParams,
    responseSerialize: serialize_HighScores_AllHighScoresResponse,
    responseDeserialize: deserialize_HighScores_AllHighScoresResponse,
  },
  addHighScore: {
    path: '/HighScores.HighScoresService/AddHighScore',
    requestStream: false,
    responseStream: false,
    requestType: highscore$service_pb.NewHighScore,
    responseType: highscore$service_pb.AddHighScoreResponse,
    requestSerialize: serialize_HighScores_NewHighScore,
    requestDeserialize: deserialize_HighScores_NewHighScore,
    responseSerialize: serialize_HighScores_AddHighScoreResponse,
    responseDeserialize: deserialize_HighScores_AddHighScoreResponse,
  },
};

exports.HighScoresServiceClient = grpc.makeGenericClientConstructor(HighScoresServiceService);

// package: HighScores
// file: highscore-service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as highscore_service_pb from "./highscore-service_pb";

interface IHighScoresService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    addHighScore: IHighScoresService_IAddHighScore;
}

interface IHighScoresService_IAddHighScore extends grpc.MethodDefinition<highscore_service_pb.HighScore, highscore_service_pb.HighScore> {
    path: string; // "/HighScores.HighScores/AddHighScore"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<highscore_service_pb.HighScore>;
    requestDeserialize: grpc.deserialize<highscore_service_pb.HighScore>;
    responseSerialize: grpc.serialize<highscore_service_pb.HighScore>;
    responseDeserialize: grpc.deserialize<highscore_service_pb.HighScore>;
}

export const HighScoresService: IHighScoresService;

export interface IHighScoresServer {
    addHighScore: grpc.handleUnaryCall<highscore_service_pb.HighScore, highscore_service_pb.HighScore>;
}

export interface IHighScoresClient {
    addHighScore(request: highscore_service_pb.HighScore, callback: (error: grpc.ServiceError | null, response: highscore_service_pb.HighScore) => void): grpc.ClientUnaryCall;
    addHighScore(request: highscore_service_pb.HighScore, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: highscore_service_pb.HighScore) => void): grpc.ClientUnaryCall;
    addHighScore(request: highscore_service_pb.HighScore, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: highscore_service_pb.HighScore) => void): grpc.ClientUnaryCall;
}

export class HighScoresClient extends grpc.Client implements IHighScoresClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public addHighScore(request: highscore_service_pb.HighScore, callback: (error: grpc.ServiceError | null, response: highscore_service_pb.HighScore) => void): grpc.ClientUnaryCall;
    public addHighScore(request: highscore_service_pb.HighScore, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: highscore_service_pb.HighScore) => void): grpc.ClientUnaryCall;
    public addHighScore(request: highscore_service_pb.HighScore, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: highscore_service_pb.HighScore) => void): grpc.ClientUnaryCall;
}

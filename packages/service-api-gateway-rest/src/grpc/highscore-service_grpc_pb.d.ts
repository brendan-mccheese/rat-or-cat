// package: HighScores
// file: highscore-service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as highscore_service_pb from "./highscore-service_pb";

interface IHighScoresServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getAllHighScores: IHighScoresServiceService_IGetAllHighScores;
    addHighScore: IHighScoresServiceService_IAddHighScore;
}

interface IHighScoresServiceService_IGetAllHighScores extends grpc.MethodDefinition<highscore_service_pb.GetAllHighScoresParams, highscore_service_pb.AllHighScoresResponse> {
    path: string; // "/HighScores.HighScoresService/GetAllHighScores"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<highscore_service_pb.GetAllHighScoresParams>;
    requestDeserialize: grpc.deserialize<highscore_service_pb.GetAllHighScoresParams>;
    responseSerialize: grpc.serialize<highscore_service_pb.AllHighScoresResponse>;
    responseDeserialize: grpc.deserialize<highscore_service_pb.AllHighScoresResponse>;
}
interface IHighScoresServiceService_IAddHighScore extends grpc.MethodDefinition<highscore_service_pb.NewHighScore, highscore_service_pb.AddHighScoreResponse> {
    path: string; // "/HighScores.HighScoresService/AddHighScore"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<highscore_service_pb.NewHighScore>;
    requestDeserialize: grpc.deserialize<highscore_service_pb.NewHighScore>;
    responseSerialize: grpc.serialize<highscore_service_pb.AddHighScoreResponse>;
    responseDeserialize: grpc.deserialize<highscore_service_pb.AddHighScoreResponse>;
}

export const HighScoresServiceService: IHighScoresServiceService;

export interface IHighScoresServiceServer {
    getAllHighScores: grpc.handleUnaryCall<highscore_service_pb.GetAllHighScoresParams, highscore_service_pb.AllHighScoresResponse>;
    addHighScore: grpc.handleUnaryCall<highscore_service_pb.NewHighScore, highscore_service_pb.AddHighScoreResponse>;
}

export interface IHighScoresServiceClient {
    getAllHighScores(request: highscore_service_pb.GetAllHighScoresParams, callback: (error: grpc.ServiceError | null, response: highscore_service_pb.AllHighScoresResponse) => void): grpc.ClientUnaryCall;
    getAllHighScores(request: highscore_service_pb.GetAllHighScoresParams, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: highscore_service_pb.AllHighScoresResponse) => void): grpc.ClientUnaryCall;
    getAllHighScores(request: highscore_service_pb.GetAllHighScoresParams, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: highscore_service_pb.AllHighScoresResponse) => void): grpc.ClientUnaryCall;
    addHighScore(request: highscore_service_pb.NewHighScore, callback: (error: grpc.ServiceError | null, response: highscore_service_pb.AddHighScoreResponse) => void): grpc.ClientUnaryCall;
    addHighScore(request: highscore_service_pb.NewHighScore, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: highscore_service_pb.AddHighScoreResponse) => void): grpc.ClientUnaryCall;
    addHighScore(request: highscore_service_pb.NewHighScore, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: highscore_service_pb.AddHighScoreResponse) => void): grpc.ClientUnaryCall;
}

export class HighScoresServiceClient extends grpc.Client implements IHighScoresServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getAllHighScores(request: highscore_service_pb.GetAllHighScoresParams, callback: (error: grpc.ServiceError | null, response: highscore_service_pb.AllHighScoresResponse) => void): grpc.ClientUnaryCall;
    public getAllHighScores(request: highscore_service_pb.GetAllHighScoresParams, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: highscore_service_pb.AllHighScoresResponse) => void): grpc.ClientUnaryCall;
    public getAllHighScores(request: highscore_service_pb.GetAllHighScoresParams, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: highscore_service_pb.AllHighScoresResponse) => void): grpc.ClientUnaryCall;
    public addHighScore(request: highscore_service_pb.NewHighScore, callback: (error: grpc.ServiceError | null, response: highscore_service_pb.AddHighScoreResponse) => void): grpc.ClientUnaryCall;
    public addHighScore(request: highscore_service_pb.NewHighScore, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: highscore_service_pb.AddHighScoreResponse) => void): grpc.ClientUnaryCall;
    public addHighScore(request: highscore_service_pb.NewHighScore, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: highscore_service_pb.AddHighScoreResponse) => void): grpc.ClientUnaryCall;
}

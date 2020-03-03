// package: HighScores
// file: highscore-service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class NewHighScore extends jspb.Message { 
    getId(): string;
    setId(value: string): void;

    getUsername(): string;
    setUsername(value: string): void;

    getScore(): number;
    setScore(value: number): void;

    getTimestamp(): number;
    setTimestamp(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NewHighScore.AsObject;
    static toObject(includeInstance: boolean, msg: NewHighScore): NewHighScore.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NewHighScore, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NewHighScore;
    static deserializeBinaryFromReader(message: NewHighScore, reader: jspb.BinaryReader): NewHighScore;
}

export namespace NewHighScore {
    export type AsObject = {
        id: string,
        username: string,
        score: number,
        timestamp: number,
    }
}

export class AddHighScoreResponse extends jspb.Message { 

    hasInserted(): boolean;
    clearInserted(): void;
    getInserted(): NewHighScore | undefined;
    setInserted(value?: NewHighScore): void;

    clearErrorsList(): void;
    getErrorsList(): Array<string>;
    setErrorsList(value: Array<string>): void;
    addErrors(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddHighScoreResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AddHighScoreResponse): AddHighScoreResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddHighScoreResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddHighScoreResponse;
    static deserializeBinaryFromReader(message: AddHighScoreResponse, reader: jspb.BinaryReader): AddHighScoreResponse;
}

export namespace AddHighScoreResponse {
    export type AsObject = {
        inserted?: NewHighScore.AsObject,
        errorsList: Array<string>,
    }
}

export class CurrentHighScore extends jspb.Message { 
    getId(): string;
    setId(value: string): void;

    getUsername(): string;
    setUsername(value: string): void;

    getScore(): number;
    setScore(value: number): void;

    getTimestamp(): number;
    setTimestamp(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CurrentHighScore.AsObject;
    static toObject(includeInstance: boolean, msg: CurrentHighScore): CurrentHighScore.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CurrentHighScore, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CurrentHighScore;
    static deserializeBinaryFromReader(message: CurrentHighScore, reader: jspb.BinaryReader): CurrentHighScore;
}

export namespace CurrentHighScore {
    export type AsObject = {
        id: string,
        username: string,
        score: number,
        timestamp: number,
    }
}

export class AllHighScoresResponse extends jspb.Message { 
    clearScoresList(): void;
    getScoresList(): Array<CurrentHighScore>;
    setScoresList(value: Array<CurrentHighScore>): void;
    addScores(value?: CurrentHighScore, index?: number): CurrentHighScore;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AllHighScoresResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AllHighScoresResponse): AllHighScoresResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AllHighScoresResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AllHighScoresResponse;
    static deserializeBinaryFromReader(message: AllHighScoresResponse, reader: jspb.BinaryReader): AllHighScoresResponse;
}

export namespace AllHighScoresResponse {
    export type AsObject = {
        scoresList: Array<CurrentHighScore.AsObject>,
    }
}

export class GetAllHighScoresParams extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllHighScoresParams.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllHighScoresParams): GetAllHighScoresParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllHighScoresParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllHighScoresParams;
    static deserializeBinaryFromReader(message: GetAllHighScoresParams, reader: jspb.BinaryReader): GetAllHighScoresParams;
}

export namespace GetAllHighScoresParams {
    export type AsObject = {
    }
}

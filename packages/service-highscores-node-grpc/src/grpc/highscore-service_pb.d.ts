// package: HighScores
// file: highscore-service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class HighScore extends jspb.Message { 
    getId(): string;
    setId(value: string): void;

    getUsername(): string;
    setUsername(value: string): void;

    getScore(): number;
    setScore(value: number): void;

    getTimestamp(): number;
    setTimestamp(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HighScore.AsObject;
    static toObject(includeInstance: boolean, msg: HighScore): HighScore.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HighScore, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HighScore;
    static deserializeBinaryFromReader(message: HighScore, reader: jspb.BinaryReader): HighScore;
}

export namespace HighScore {
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
    getInserted(): HighScore | undefined;
    setInserted(value?: HighScore): void;

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
        inserted?: HighScore.AsObject,
        errorsList: Array<string>,
    }
}

// package: HighScores
// file: highscore-service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class HighScore extends jspb.Message { 
    getId(): string;
    setId(value: string): void;


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
    }
}

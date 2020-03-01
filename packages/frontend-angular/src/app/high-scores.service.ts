import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { NewHighScore } from "./models/new-high-score";

@Injectable({
    providedIn: "root",
})
export class HighScoresService {
    constructor(private httpClient: HttpClient) {}

    addHighScore(highScore: NewHighScore) {
      return this.httpClient.post("/api/high-score", highScore).pipe(map(x => x));
    }
}

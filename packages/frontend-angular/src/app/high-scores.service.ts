import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
    providedIn: "root",
})
export class HighScoresService {
    constructor(private httpClient: HttpClient) {}

    addHighScore(highScore: {username: string, score: number}) {
      return this.httpClient.post("/api/high-score", highScore).pipe(map(x => x));
    }
}

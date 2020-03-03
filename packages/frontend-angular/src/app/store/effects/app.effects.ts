import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ImageService } from "../../image.service";
import { loadQuestion, questionData } from "../actions/question.actions";
import { map, mergeMap } from "rxjs/operators";
import { HighScoresService } from "../../high-scores.service";
import { highScoreSubmitted, submitScore } from "../actions/scores.actions";

@Injectable()
export class AppEffects {
    questionData$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadQuestion),
            mergeMap(() => this.imageService.getImage()),
            map(x => questionData({ path: x.path, imageType: x.type })),
        ),
    );

    highScores$ = createEffect(() =>
        this.actions$.pipe(
            ofType(submitScore),
            mergeMap(newScore => this.highScoresService.addHighScore(newScore).pipe(map(x => highScoreSubmitted(x)))),
        ),
    );

    constructor(
        private actions$: Actions,
        private imageService: ImageService,
        private highScoresService: HighScoresService,
    ) {}
}

import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ImageService } from "../../image.service";
import { loadQuestion, questionData } from "../actions/question.actions";
import { map, mergeMap } from "rxjs/operators";

@Injectable()
export class AppEffects {
    questionData$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadQuestion),
            mergeMap(() => this.imageService.getImage()),
            map(x => questionData({path: x.path, imageType: x.type}))
        ),
    );

    constructor(private actions$: Actions, private imageService: ImageService) {}
}

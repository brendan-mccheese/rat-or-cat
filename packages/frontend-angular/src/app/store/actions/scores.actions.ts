import { createAction, props } from "@ngrx/store";
import { NewHighScore } from "../../models/new-high-score";
import { HighScore } from "../../models/high-score";

export const submitScore = createAction("[High Score] Submit high score", props<NewHighScore>());

export const highScoreSubmitted = createAction("[High Score] High score submitted", props<HighScore>());

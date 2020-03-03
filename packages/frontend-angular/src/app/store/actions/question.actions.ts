import { createAction, props } from "@ngrx/store";

export const loadQuestion = createAction("[Question] Load Question");

export const questionData = createAction(
    "[Question] Loaded Question Data",
    props<{ path: string; imageType: "RAT" | "CAT" }>(),
);

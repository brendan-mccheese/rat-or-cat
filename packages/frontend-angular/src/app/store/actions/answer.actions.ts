import { createAction, props } from "@ngrx/store";
import { CatOrRat } from "../app-state";

export const answerQuestion = createAction(
  "[AnswerQuestion] Answer Question",
  props<{ questionNo: number; answer: CatOrRat, correctAnswer: CatOrRat }>(),
);

export const resetAnswers = createAction("[ResetAnswers] Reset Answers");

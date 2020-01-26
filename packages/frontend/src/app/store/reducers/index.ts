import { Action, ActionReducerMap, createReducer, MetaReducer, on } from "@ngrx/store";
import { environment } from "../../../environments/environment";
import { setUsername } from "../actions/set-username.actions";
import { AnswerResult, AppState } from "../app-state";
import * as answerActions from "../actions/answer.actions";

export function usernameReducer(state: string, action: Action) {
  return createReducer(
    "",
    on(setUsername, (current, { username }) => username),
  )(state, action);
}

export function answersReducer(state: AppState["answers"], action: Action) {
  return createReducer(
    {score: 0},
    on(answerActions.answerQuestion, (current, payload) => {
      return {
        ...state,
        [`question${payload.questionNo}`]: {
          answerGiven: payload.answer,
          correctAnswer: payload.correctAnswer
        } as AnswerResult,
        score: payload.answer !== payload.correctAnswer ? state.score : state.score + 1
      };
    }),
  )(state, action);
}

export const reducers: ActionReducerMap<AppState> = {
  username: usernameReducer,
  answers: answersReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];

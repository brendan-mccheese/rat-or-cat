import { Action, ActionReducerMap, createReducer, MetaReducer, on } from "@ngrx/store";
import { environment } from "../../../environments/environment";
import { setUsername } from "../actions/set-username.actions";
import { AppState } from "../app-state";
import * as answerActions from "../actions/answer.actions";

export function usernameReducer(state: string, action: Action) {
  return createReducer(
    "",
    on(setUsername, (current, { username }) => username),
  )(state, action);
}

export function answersReducer(state: AppState["answers"], action: Action) {
  return createReducer(
    null,
    on(answerActions.answerQuestion, (current, payload) => {
      return {
        ...state,
        [`question${payload.questionNo}`]: payload.answer,
      };
    }),
  )(state, action);
}

export const reducers: ActionReducerMap<AppState> = {
  username: usernameReducer,
  answers: answersReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];

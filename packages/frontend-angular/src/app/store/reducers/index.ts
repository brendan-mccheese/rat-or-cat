import { Action, ActionReducerMap, createReducer, MetaReducer, on } from "@ngrx/store";
import { environment } from "../../../environments/environment";
import { setUsername } from "../actions/set-username.actions";
import { AnswerResult, AppState } from "../app-state";
import * as answerActions from "../actions/answer.actions";
import * as questionActions from "../actions/question.actions";
import * as highScoreActions from "../actions/scores.actions";

export function usernameReducer(state: string, action: Action) {
    return createReducer(
        "",
        on(setUsername, (current, { username }) => username),
    )(state, action);
}

export function answersReducer(state: AppState["answers"], action: Action) {
    return createReducer(
        { score: 0 },
        on(answerActions.answerQuestion, (current, payload) => {
            return {
                ...state,
                [`question${payload.questionNo}`]: {
                    answerGiven: payload.answer,
                    correctAnswer: payload.correctAnswer,
                } as AnswerResult,
                score: payload.answer !== payload.correctAnswer ? state.score : state.score + 1,
            };
        }),
        on(answerActions.resetAnswers, current => ({
            score: 0,
        })),
    )(state, action);
}

export function questionReducer(state: AppState["currentQuestion"], action: Action) {
    return createReducer(
        null,
        on(questionActions.questionData, (current, payload) => {
            return payload;
        }),
    )(state, action);
}

export function highScoreReducer(state: AppState["highScore"], action: Action) {
    return createReducer(
        null,
        on(highScoreActions.highScoreSubmitted, (current, payload) => {
            return {
                ...payload,
            };
        }),
    )(state, action);
}

export const reducers: ActionReducerMap<AppState> = {
    username: usernameReducer,
    answers: answersReducer,
    currentQuestion: questionReducer,
    highScore: highScoreReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];

export type CatOrRat = "CAT" | "RAT";

export interface AnswerResult {
    answerGiven: CatOrRat;
    correctAnswer: CatOrRat;
}

export interface AppState {
    username?: string;
    answers?: {
        question1?: AnswerResult;
        question2?: AnswerResult;
        question4?: AnswerResult;
        question5?: AnswerResult;
        question6?: AnswerResult;
        question7?: AnswerResult;
        question8?: AnswerResult;
        question9?: AnswerResult;
        question10?: AnswerResult;
        score: number;
    };
    currentQuestion?: { path: string; imageType: CatOrRat };
}

import { inject, TestBed } from "@angular/core/testing";

import { CanAnswerQuestionGuard } from "./can-answer-question.guard";
import { Store } from "@ngrx/store";
import { Router } from "@angular/router";

describe("CanAnswerQuestionGuard", () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                CanAnswerQuestionGuard,
                {
                    provide: Store,
                    useValue: {},
                },
                {
                    provide: Router,
                    useValue: {},
                },
            ],
        });
    });

    it("should ...", inject([CanAnswerQuestionGuard], (guard: CanAnswerQuestionGuard) => {
        expect(guard).toBeTruthy();
    }));
});

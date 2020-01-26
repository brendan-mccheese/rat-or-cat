import { inject, TestBed } from "@angular/core/testing";

import { CanAnswerQuestionGuard } from "./can-answer-question.guard";

describe("CanAnswerQuestionGuard", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanAnswerQuestionGuard],
    });
  });

  it("should ...", inject([CanAnswerQuestionGuard], (guard: CanAnswerQuestionGuard) => {
    expect(guard).toBeTruthy();
  }));
});

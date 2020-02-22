import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { QuestionComponent } from "./question.component";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { HttpClient } from "@angular/common/http";
import { MockComponent } from "ng-mocks";
import { CardComponent } from "../../../core/card/card.component";
import { provideMockStore } from "@ngrx/store/testing";
import { of } from "rxjs";
import { answerQuestion } from "../../../store/actions/answer.actions";

describe("QuestionComponent", () => {
    let component: QuestionComponent;
    let fixture: ComponentFixture<QuestionComponent>;
    let mockStore: Store<any>;
    let dispatchSpy: jest.SpyInstance;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [QuestionComponent, MockComponent(CardComponent)],
            providers: [
                {
                    provide: ActivatedRoute,
                    useValue: {
                        snapshot: {
                            data: {
                                no: 1,
                            },
                        },
                    },
                },
                provideMockStore({}),
                {
                    provide: Router,
                    useValue: {
                        navigateByUrl: jest.fn(),
                    },
                },
                {
                    provide: HttpClient,
                    useValue: {
                        get: jest.fn(() => of({ path: "/cat.png", type: "CAT" })),
                    },
                },
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(QuestionComponent);
        mockStore = TestBed.get(Store);
        dispatchSpy = jest.spyOn(mockStore, "dispatch");
        component = fixture.componentInstance;
        fixture.detectChanges();
        jest.clearAllMocks();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });

    describe("answering question", () => {
      let navigateMock: jest.SpyInstance;
      beforeEach(() => {
        navigateMock = (TestBed.get(Router) as Router).navigateByUrl as jest.Mock;
        component.answerQuestion("CAT", "RAT");
      });

      test("dispatches action", () => {
        expect(dispatchSpy).toHaveBeenCalledWith(
          answerQuestion({
            answer: "CAT",
            correctAnswer: "RAT",
            questionNo: 1,
          }),
        );
      });

      test("navigates to next question", () => {
        expect(navigateMock).toHaveBeenCalledWith("/game/question-2");
      });
    });
});

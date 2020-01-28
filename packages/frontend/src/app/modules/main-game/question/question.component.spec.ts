import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { QuestionComponent } from "./question.component";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { HttpClient } from "@angular/common/http";
import { MockComponent } from "ng-mocks";
import { CardComponent } from "../../../core/card/card.component";
import { provideMockStore } from "@ngrx/store/testing";
import { of } from "rxjs";

describe("QuestionComponent", () => {
    let component: QuestionComponent;
    let fixture: ComponentFixture<QuestionComponent>;

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
                    useValue: {},
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
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});

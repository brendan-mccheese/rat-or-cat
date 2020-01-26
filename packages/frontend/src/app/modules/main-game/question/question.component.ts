import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { map, share } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { AppState, CatOrRat } from "../../../store/app-state";
import { answerQuestion } from "../../../store/actions/answer.actions";
import { HttpClient } from "@angular/common/http";

type ImageResult = { path: string; type: "RAT" | "CAT" };

@Component({
    selector: "roc-question",
    templateUrl: "./question.component.html",
    styleUrls: ["./question.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionComponent implements OnInit {
    questionNo$: Observable<number>;
    image$: Observable<string>;
    correctAnswer$: Observable<"CAT" | "RAT">;

    constructor(
        private routerState: ActivatedRoute,
        private store: Store<AppState>,
        private router: Router,
        private httpClient: HttpClient,
    ) {}

    ngOnInit() {
        this.questionNo$ = this.routerState.data.pipe(map(x => x.no));
        // TODO: Use an effect to handle question requests

        // Get randomized rat or cat image data
        let result$: Observable<ImageResult>;
        if (Math.floor(Math.random() * 2) === 1) {
            result$ = this.httpClient.get("/api/cat-image").pipe(share()) as Observable<ImageResult>;
        } else {
            result$ = this.httpClient.get("/api/rat-image").pipe(share()) as Observable<ImageResult>;
        }
        this.image$ = result$.pipe(map((x: any) => `/api${x.path}`));
        this.correctAnswer$ = result$.pipe(map((x: any) => x.type));
    }

    answerQuestion(questionNo: number, answer: CatOrRat, correctAnswer: CatOrRat) {
        this.store.dispatch(answerQuestion({ questionNo, answer, correctAnswer }));
        const nextNo = ++questionNo;
        if (nextNo < 11) {
            this.router.navigateByUrl(`/game/question-${nextNo}`);
            return;
        }
        this.router.navigateByUrl(`/game/scores`);
    }
}

import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { filter, map, share } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { AppState, CatOrRat } from "../../../store/app-state";
import { answerQuestion, resetAnswers } from "../../../store/actions/answer.actions";
import { loadQuestion } from "../../../store/actions/question.actions";

@Component({
    selector: "roc-question",
    templateUrl: "./question.component.html",
    styleUrls: ["./question.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionComponent implements OnInit {
    questionNo: number;
    questionData$ = this.store
        .select(x => x.currentQuestion)
        .pipe(
            share(),
            filter(x => x != null),
        );
    image$ = this.questionData$.pipe(map(x => `/api${x.path}`));
    correctAnswer$ = this.questionData$.pipe(map(x => x.imageType));

    constructor(
        private routerState: ActivatedRoute,
        private store: Store<AppState>,
        private router: Router,
    ) {}

    ngOnInit() {
        this.questionNo = this.routerState.snapshot.data.no;
        if (this.questionNo === 1) {
            this.store.dispatch(resetAnswers());
        }
        this.store.dispatch(loadQuestion());
    }

    answerQuestion(answer: CatOrRat, correctAnswer: CatOrRat) {
        this.store.dispatch(answerQuestion({ questionNo: this.questionNo, answer, correctAnswer }));
        const nextNo = this.questionNo + 1;
        if (nextNo < 11) {
            this.router.navigateByUrl(`/game/question-${nextNo}`);
            return;
        }
        this.router.navigateByUrl(`/game/scores`);
    }
}

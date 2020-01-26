import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { AppState, CatOrRat } from "../../../store/app-state";
import { answerQuestion } from "../../../store/actions/answer.actions";

@Component({
  selector: "roc-question",
  templateUrl: "./question.component.html",
  styleUrls: ["./question.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionComponent implements OnInit {
  questionNo$: Observable<number>;

  constructor(private routerState: ActivatedRoute, private store: Store<AppState>, private router: Router) {
  }

  ngOnInit() {
    this.questionNo$ = this.routerState.data.pipe(map(x => x.no));
  }

  answerQuestion(questionNo: number, answer: CatOrRat) {
    this.store.dispatch(answerQuestion({ questionNo, answer }));
    const nextNo = ++questionNo;
    if (nextNo < 10) {
      this.router.navigateByUrl(`/game/question-${nextNo}`);
      return;
    }
    this.router.navigateByUrl(`/game/scores`);
  }
}

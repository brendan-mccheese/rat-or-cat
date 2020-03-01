import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { combineLatest, Observable } from "rxjs";
import { select, Store } from "@ngrx/store";
import { AppState } from "../../../store/app-state";
import { Router } from "@angular/router";
import { HighScoresService } from "../../../high-scores.service";
import { concatMap, filter, first } from "rxjs/operators";

@Component({
    selector: "roc-scores",
    templateUrl: "./scores.component.html",
    styleUrls: ["./scores.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScoresComponent implements OnInit {
    username$: Observable<string>;
    score$: Observable<number>;

    constructor(private store: Store<AppState>, private router: Router, private highScoreService: HighScoresService) {}

    ngOnInit(): void {
        this.username$ = this.store.pipe(select(x => x.username));
        this.score$ = this.store.select(x => x.answers.score);
        combineLatest([this.username$, this.score$])
            .pipe(
                filter(([username, score]) => username != null && score != null),
                first(),
                concatMap(([username, score]) =>
                    this.highScoreService.addHighScore({ username, score, timestamp: new Date() }),
                ),
            )
            .subscribe();
    }

    playAgain() {
        this.router.navigateByUrl("/game/question-1");
    }
}

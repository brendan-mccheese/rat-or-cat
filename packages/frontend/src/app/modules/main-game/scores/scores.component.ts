import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { select, Store } from "@ngrx/store";
import { AppState } from "../../../store/app-state";
import { Router } from "@angular/router";

@Component({
    selector: "roc-scores",
    templateUrl: "./scores.component.html",
    styleUrls: ["./scores.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScoresComponent implements OnInit {
    username$: Observable<string>;
    score$: Observable<number>;

    constructor(private store: Store<AppState>, private router: Router) {}

    ngOnInit(): void {
        this.username$ = this.store.pipe(select(x => x.username));
        this.score$ = this.store.select(x => x.answers.score);
    }

    playAgain() {
        this.router.navigateByUrl("/game/question-1");
    }
}

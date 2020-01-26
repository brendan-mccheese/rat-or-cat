import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { select, Store } from "@ngrx/store";
import { AppState } from "../../../store/app-state";

@Component({
  selector: "roc-scores",
  templateUrl: "./scores.component.html",
  styleUrls: ["./scores.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScoresComponent implements OnInit {
  username$: Observable<string>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.username$ = this.store.pipe(select(x => x.username));
  }
}

import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { AppState } from "./store/app-state";
import { Observable } from "rxjs";

@Component({
  selector: "roc-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "rat-or-cat";
  username$: Observable<string>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.username$ = this.store.pipe(select(x => x.username));
  }
}

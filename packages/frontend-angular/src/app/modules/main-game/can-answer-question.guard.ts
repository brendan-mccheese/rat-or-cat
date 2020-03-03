import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { AppState } from "../../store/app-state";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class CanAnswerQuestionGuard implements CanActivate {

  constructor(private store: Store<AppState>, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.store.select(x => x.username).pipe(map(x => {
      if (x) {
        return true;
      }
      this.router.navigateByUrl("/registration");
      return false;
    }));
  }
}

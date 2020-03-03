import { TestBed } from "@angular/core/testing";
import { provideMockActions } from "@ngrx/effects/testing";
import { Observable, of } from "rxjs";

import { AppEffects } from "./app.effects";
import { HttpTestingController } from "@angular/common/http/testing";
import { HttpClient } from "@angular/common/http";

describe("AppEffects", () => {
  const actions$: Observable<any> = of([]);
  let effects: AppEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AppEffects,
        provideMockActions(() => actions$),
        {
          provide: HttpClient,
          useValue: {}
        }
      ],
    });

    effects = TestBed.get<AppEffects>(AppEffects);
  });

  it("should be created", () => {
    expect(effects).toBeTruthy();
  });
});

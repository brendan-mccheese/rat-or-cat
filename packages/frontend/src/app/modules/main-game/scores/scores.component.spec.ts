import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ScoresComponent } from "./scores.component";
import { MockComponent } from "ng-mocks";
import { CardComponent } from "../../../core/card/card.component";

describe("ScoresComponent", () => {
  let component: ScoresComponent;
  let fixture: ComponentFixture<ScoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScoresComponent, MockComponent(CardComponent)],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

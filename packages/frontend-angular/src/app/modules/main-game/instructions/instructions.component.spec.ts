import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { InstructionsComponent } from "./instructions.component";
import { Router } from "@angular/router";
import { MockComponent } from "ng-mocks";
import { CardComponent } from "../../../core/card/card.component";

describe("InstructionsComponent", () => {
  let component: InstructionsComponent;
  let fixture: ComponentFixture<InstructionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InstructionsComponent, MockComponent(CardComponent)],
      providers: [
        {
          provide: Router,
          useValue: {}
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

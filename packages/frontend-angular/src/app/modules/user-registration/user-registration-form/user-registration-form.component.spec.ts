import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { UserRegistrationFormComponent } from "./user-registration-form.component";
import { ReactiveFormsModule } from "@angular/forms";
import { MockComponent } from "ng-mocks";
import { CardComponent } from "../../../core/card/card.component";
import { provideMockStore } from "@ngrx/store/testing";
import { Router } from "@angular/router";

describe("UserRegistrationFormComponent", () => {
  let component: UserRegistrationFormComponent;
  let fixture: ComponentFixture<UserRegistrationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [UserRegistrationFormComponent, MockComponent(CardComponent)],
      providers: [
        provideMockStore({}),
        {
          provide: Router,
          useValue: {}
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

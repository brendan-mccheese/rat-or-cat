import { ChangeDetectionStrategy, Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { setUsername } from "../../../store/actions/set-username.actions";
import { AppState } from "../../../store/app-state";
import { Router } from "@angular/router";

@Component({
  selector: "roc-user-registration-form",
  templateUrl: "./user-registration-form.component.html",
  styleUrls: ["./user-registration-form.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserRegistrationFormComponent {
  form: FormGroup;

  constructor(fb: FormBuilder, private store: Store<AppState>, private router: Router) {
    this.form = fb.group({
      username: ["", Validators.required],
    });
  }

  submitDetails() {
    this.form.markAllAsTouched();
    if (!this.form.valid) {
      return;
    }
    this.store.dispatch(setUsername({ username: this.form.value.username }));
    this.router.navigateByUrl("/game");
  }
}

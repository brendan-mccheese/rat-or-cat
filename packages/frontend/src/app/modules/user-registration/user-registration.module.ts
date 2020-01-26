import { NgModule } from "@angular/core";
import { UserRegistrationFormComponent } from "./user-registration-form/user-registration-form.component";
import { UserRegistrationRoutingModule } from "./user-registration-routing.module";
import { CoreModule } from "../../core/core.module";

@NgModule({
  declarations: [UserRegistrationFormComponent],
  imports: [CoreModule, UserRegistrationRoutingModule],
})
export class UserRegistrationModule {
}

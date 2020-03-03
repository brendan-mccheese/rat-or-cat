import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "registration",
    pathMatch: "full",
  },
  {
    path: "registration",
    loadChildren: () =>
      import("./modules/user-registration/user-registration.module").then(x => x.UserRegistrationModule),
  },
  {
    path: "game",
    loadChildren: () => import("./modules/main-game/main-game.module").then(x => x.MainGameModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}

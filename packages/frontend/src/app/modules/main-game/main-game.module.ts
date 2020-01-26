import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MainGameRoutingModule } from "./main-game-routing.module";
import { InstructionsComponent } from "./instructions/instructions.component";
import { CoreModule } from "../../core/core.module";
import { QuestionComponent } from "./question/question.component";
import { ScoresComponent } from "./scores/scores.component";

@NgModule({
  declarations: [InstructionsComponent, QuestionComponent, ScoresComponent],
  imports: [CommonModule, MainGameRoutingModule, CoreModule],
})
export class MainGameModule {
}

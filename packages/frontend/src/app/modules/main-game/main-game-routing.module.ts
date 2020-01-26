import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InstructionsComponent } from "./instructions/instructions.component";
import { QuestionComponent } from "./question/question.component";
import { ScoresComponent } from "./scores/scores.component";
import { CanAnswerQuestionGuard } from "./can-answer-question.guard";

const routes: Routes = [
  {
    path: "",
    component: InstructionsComponent,
  },
  // TODO: Dynamically register n routes based on some config
  {
    path: "question-1",
    component: QuestionComponent,
    data: {
      no: 1,
    },
    canActivate: [CanAnswerQuestionGuard],
  },
  {
    path: "question-2",
    component: QuestionComponent,
    data: {
      no: 2,
    },
    canActivate: [CanAnswerQuestionGuard],
  },
  {
    path: "question-3",
    component: QuestionComponent,
    data: {
      no: 3,
    },
    canActivate: [CanAnswerQuestionGuard],
  },
  {
    path: "question-4",
    component: QuestionComponent,
    data: {
      no: 4,
    },
    canActivate: [CanAnswerQuestionGuard],
  },
  {
    path: "question-5",
    component: QuestionComponent,
    data: {
      no: 5,
    },
    canActivate: [CanAnswerQuestionGuard],
  },
  {
    path: "question-6",
    component: QuestionComponent,
    data: {
      no: 6,
    },
    canActivate: [CanAnswerQuestionGuard],
  },
  {
    path: "question-7",
    component: QuestionComponent,
    data: {
      no: 7,
    },
    canActivate: [CanAnswerQuestionGuard],
  },
  {
    path: "question-8",
    component: QuestionComponent,
    data: {
      no: 8,
    },
    canActivate: [CanAnswerQuestionGuard],
  },
  {
    path: "question-9",
    component: QuestionComponent,
    data: {
      no: 9,
    },
    canActivate: [CanAnswerQuestionGuard],
  },
  {
    path: "question-10",
    component: QuestionComponent,
    data: {
      no: 10,
    },
    canActivate: [CanAnswerQuestionGuard],
  },
  {
    path: "scores",
    component: ScoresComponent,
    canActivate: [CanAnswerQuestionGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainGameRoutingModule {
}

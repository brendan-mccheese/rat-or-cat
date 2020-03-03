import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "roc-instructions",
  templateUrl: "./instructions.component.html",
  styleUrls: ["./instructions.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InstructionsComponent {
  constructor(private router: Router) {
  }

  startGame() {
    this.router.navigateByUrl("/game/question-1");
  }
}

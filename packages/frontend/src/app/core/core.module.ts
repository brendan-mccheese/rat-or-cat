import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ContentContainerComponent } from "./content-container/content-container.component";
import { CardComponent } from "./card/card.component";

@NgModule({
  declarations: [ContentContainerComponent, CardComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, ContentContainerComponent, CardComponent],
})
export class CoreModule {
}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ContentContainerComponent } from "./content-container/content-container.component";
import { CardComponent } from "./card/card.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [ContentContainerComponent, CardComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
    exports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        ContentContainerComponent,
        CardComponent,
    ],
})
export class CoreModule {}

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { share } from "rxjs/operators";

type ImageResult = { path: string; type: "RAT" | "CAT" };

@Injectable({
    providedIn: "root",
})
export class ImageService {
    constructor(private httpClient: HttpClient) {}

    getImage() {
      // Get randomized rat or cat image data
      let result$: Observable<ImageResult>;
      if (Math.floor(Math.random() * 2) === 1) {
        result$ = this.httpClient.get("/api/image-data/cat").pipe(share()) as Observable<ImageResult>;
      } else {
        result$ = this.httpClient.get("/api/image-data/rat").pipe(share()) as Observable<ImageResult>;
      }
      return result$;
    }
}

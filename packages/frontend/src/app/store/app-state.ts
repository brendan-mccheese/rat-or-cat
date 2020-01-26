export type CatOrRat = "CAT" | "RAT";

export interface AppState {
  username?: string;
  answers?: {
    question1: CatOrRat;
    question2: CatOrRat;
    question4: CatOrRat;
    question5: CatOrRat;
    question6: CatOrRat;
    question7: CatOrRat;
    question8: CatOrRat;
    question9: CatOrRat;
    question10: CatOrRat;
  };
}

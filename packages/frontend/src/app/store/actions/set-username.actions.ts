import { createAction, props } from "@ngrx/store";

export const setUsername = createAction("[SetUsername] Set Username", props<{ username: string }>());

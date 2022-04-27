import { Action, createAction, props } from '@ngrx/store';

export const increment = createAction('[Store Component] Increment');
export const decrement = createAction('[Store Component] Decrement');
export const reset = createAction('[Store Component] Reset');

export class ActionTypes {
  static LOGOUT = "[App] logout";
}

export class Logout implements Action {
  readonly type = ActionTypes.LOGOUT;
}

export const message = createAction('[Store Component] Message',
  props<{
    vorname: string;
    nachname: string;
    email: string;
    land: string;
    adresse: string;
    stadt: string;
    plz: string;
    nachricht: string;
  }>());

import { Action, createAction, props } from '@ngrx/store';
import { Contact } from '../Model/model';

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
    contact: Contact
  }>()
);



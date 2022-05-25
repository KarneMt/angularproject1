import { Action, createAction, props } from '@ngrx/store';
import { Contact} from '../Model/model';

export class ActionTypes {
  static LOGOUT = "[App] logout";
}

export class Logout implements Action {
  readonly type = ActionTypes.LOGOUT;
}

export const createMessage = createAction(
  '[Store Component] Create Message',
  props<{ contact: Contact }>());

export const createMessageSuccess = createAction(
  "[Edit Message Dialog] Message Insert Success",
  props<{ action: { contact: Contact }, id: string }>()
)

export const readMessages = createAction(
  "[Edit Message Dialog] Load Message"
)

export const readMessageSuccess = createAction(
  "[Edit Message Dialog] Message Loaded",
  props<{ contact: Contact[] }>()
)

export const updateMessage = createAction(
  "[Edit Todo Dialog] Todo Updates",
  props<{ update: Contact }>()
)
export const updateMessageSuccess = createAction(
  "[Edit Todo Dialog] Todo Updates Success",
  props<{ update: Contact }>()
)
export const deleteMessage = createAction(
  "[Edit Todo Dialog] Todo Delete",
  props<{ id: string }>()
)
export const deleteMessageSuccess = createAction(
  "[Edit Todo Dialog] Todo Delete Success",
  props<{ id: string }>()
)

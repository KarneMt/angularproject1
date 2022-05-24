import { Action, createAction, props } from '@ngrx/store';
import { Contact} from '../Model/model';


export class ActionTypes {
  static LOGOUT = "[App] logout";
}

export class Logout implements Action {
  readonly type = ActionTypes.LOGOUT;
}

export const createMessage = createAction('[Store Component] Create Message',
  props<{
    contact: Contact
  }>());

export const deletemessage = createAction('[Store Component] Delete Message',
  props<{
    id: string
  }>());

export const updatemessage = createAction('[Store Component] Update Message',
  props<{
    contact: Contact
  }>());


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

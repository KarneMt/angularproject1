import { createReducer, on } from '@ngrx/store';
import { createMessageSuccess, readMessageSuccess, updateMessageSuccess, deleteMessageSuccess } from './store.actions';
import { Contact, User } from "../Model/model";

export interface ContactState {

  contact: Contact[] | undefined
}

export const initialState: ContactState = {

  contact: undefined

};

export const storeReducer = createReducer(
  initialState,

  on(readMessageSuccess, (state, action) => {
    console.log("on(readMessageSuccess")

    return {
      ...state,
      contact: action.contact
    }
  }),

  on(createMessageSuccess, (state, action) => {
    console.log("on(createMessageSuccess")
    let Contact: Contact = Object.assign({}, action.action.contact, { id: action.id })
    let cleared: Contact[] | undefined = state.contact
    console.log(cleared)
    console.log(state.contact)
    cleared = [...cleared!, ...[Contact]]
    console.log(cleared)
    return {
      ...state,
      contact: cleared
    }
  }),

  on(updateMessageSuccess, (state, action) => {
    let cleared: Contact[] = [...state.contact!]
    cleared = cleared.filter(el => el.id != action.update.id)
    cleared.push(action.update)
    return {
      ...state,
      contact: cleared
    }
  }),
  on(deleteMessageSuccess, (state, action) => {
    let cleared: Contact[] | undefined = state.contact
    cleared = cleared?.filter(el => el.id != action.id)
    return {
      ...state,
      contact: cleared
    }
  }),
)



import { createReducer, on } from '@ngrx/store';
import {deletemessage, updatemessage, createMessageSuccess, readMessageSuccess } from './store.actions';
import { Contact, User } from "../Model/model";

export interface ContactState {

  contact: Contact[]
}

export const initialState: ContactState = {

  contact: [],

};

export const storeReducer = createReducer(
  initialState,

  on(readMessageSuccess, (state, action) => {
    console.log("on(readMessageSuccess")

    return {
      ...state,
      todos: action.contact
    }
  }),

  on(createMessageSuccess, (state, action) => {
    console.log("on(createMessageSuccess")
    let Contact: Contact = Object.assign({}, action.action.contact, { id: action.id })
    let cleared: Contact[]  = state.contact
    cleared = [...cleared!, ...[Contact]]
    console.log(cleared)
    return {
      ...state,
      contact: cleared
    }
  }),

  //on(deletemessage, (state, action) => 
  //  state.filter((item) => item.id !== action.id)
  //),


  //on(updatemessage, (state, action) => {
  //  let l: Contact[]
  //  l = state.filter((item) => item.id !== action.contact.id)
  //  l.push(action.contact)
  //  return [
  //    ...l, 
  //  ]
  //}
  //),
)



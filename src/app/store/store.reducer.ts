import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, message } from './store.actions';
import { Contact } from "../Model/model";

export interface State {
  count: number
  contact: Contact[]
}

export const initialState: State = {
  count: 1,
  contact: []
};

export const storeReducer = createReducer(
  initialState.count,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);

export const storeMReducer = createReducer(
  initialState.contact,
  on(message, (state, action) => {
    return {
      ...state,
      contact: action.contact,
    }
  }),
);

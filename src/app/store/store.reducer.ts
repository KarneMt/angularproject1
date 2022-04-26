import { createReducer, on, State } from '@ngrx/store';
import { increment, decrement, reset, message } from './store.actions';

export const initialState = {
  count: 0,
  contact: {
    vorname: '', nachname: '', email: '', land: '', adresse: '', stadt: '', plz: '', nachricht: ''
  }
};

export const storeReducer = createReducer(
  initialState.count,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);

export const storeMReducer = createReducer(
  initialState.contact,
  on(message, (state) => state = {
    vorname: 'b', nachname: 'b', email: 'g', land: 'sg', adresse: 'sg', stadt: 's', plz: 'g', nachricht: 's'
  }),
);

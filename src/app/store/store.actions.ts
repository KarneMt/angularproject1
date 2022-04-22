import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Store Component] Increment');
export const decrement = createAction('[Store Component] Decrement');
export const reset = createAction('[Store Component] Reset');

export const logout = createAction(
  '[Users] logout request'
);

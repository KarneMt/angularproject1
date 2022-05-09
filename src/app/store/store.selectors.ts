import { createFeatureSelector, createSelector, State } from "@ngrx/store";


export const loadAnfragen = createSelector(
  createFeatureSelector('contact'),
  (state: any) => {
    return state
  }
);

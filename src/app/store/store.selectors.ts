import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Contact } from "../Model/model";

export const loadAnfragen = createSelector(
  createFeatureSelector('contact'),
  (state: Contact[]) => {
    return state;
  }
);

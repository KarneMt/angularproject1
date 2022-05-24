import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ContactState } from "./store.reducer"

export const contactState = createFeatureSelector('reducers') //??

export const selectContact = createSelector(
  contactState,
  (state: any) => {
    return state
  }
)

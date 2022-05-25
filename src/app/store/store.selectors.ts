import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ContactState } from "./store.reducer"

export const contactState = createFeatureSelector<ContactState>('contact-feature') //??

export const selectContact = createSelector(
  contactState,
  state => state.contact
);

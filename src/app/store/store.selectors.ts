import { createFeatureSelector, createSelector, State } from "@ngrx/store";


export const loadAnfragen = createSelector(
  createFeatureSelector('contact'),
  (state: any) => {
    return state= "{"+ "vorname: " + '"' + state.vorname + '"' + ", nachname: " + '"' + state.nachname + '"' + ", email: " + '"' + state.email + '"' + ", adresse: " + '"' + state.adresse + '"' + ", land: " + '"' + state.land + '"' + ", plz: " + '"' + state.plz + '"' + ", stadt: " + '"' + state.stadt + '"' + ", nachricht: " + '"' + state.nachricht + '"' + "}"
  }
);

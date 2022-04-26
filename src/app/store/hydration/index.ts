import { ActionReducerMap, MetaReducer, Store } from "@ngrx/store";
import { storeMReducer, storeReducer } from "../store.reducer";
import { hydrationMetaReducer } from "./hydration.reducer";

export interface RootState {
  count: number,
  contact: Contact,
}

export interface Contact {
  vorname: string
  nachname: string
  email: string
  land: string
  adresse: string
  stadt: string
  plz: string
  nachricht: string
}

export const reducers: ActionReducerMap<RootState> = {
  count: storeReducer,
  contact: storeMReducer,
}

export const metaReducers: MetaReducer[] = [
  hydrationMetaReducer,
]

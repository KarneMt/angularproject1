import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { Contact } from "../../Model/model";
import { State, storeReducer, storeMReducer } from "../store.reducer";
import { hydrationMetaReducer } from "./hydration.reducer";

export interface RootState {
  count: number,
  contact: Contact[],
}

export const reducers: ActionReducerMap<State> = {
  count: storeReducer,
  contact: storeMReducer,
}

export const metaReducers: MetaReducer[] = [
  hydrationMetaReducer,
]

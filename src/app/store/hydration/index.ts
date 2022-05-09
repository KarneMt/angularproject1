import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { Contact } from "../../Model/model";
import { State, storeMReducer, storeReducer } from "../store.reducer";
import { hydrationMetaReducer } from "./hydration.reducer";

export interface RootState {
  count: number,
  contact: Contact[],
}

export const reducers: ActionReducerMap<RootState> = {
  count: storeReducer,
  contact: storeMReducer,
}

export const metaReducers: MetaReducer[] = [
  hydrationMetaReducer,
]

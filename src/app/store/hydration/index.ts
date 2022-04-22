import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { storeReducer } from "../store.reducer";
import { hydrationMetaReducer } from "./hydration.reducer";

export interface RootState {
  count: number
}

export const reducers: ActionReducerMap<RootState> = {
  count: storeReducer
}

export const metaReducers: MetaReducer[] = [
  hydrationMetaReducer,
]

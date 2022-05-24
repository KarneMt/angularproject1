import { ActionReducer, ActionReducerMap, MetaReducer } from "@ngrx/store";
import { Contact } from "../../Model/model";
import { ContactState} from "../store.reducer";
import { hydrationMetaReducer } from "./hydration.reducer";
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

export interface RootState {
  contact: ContactState,
}

export interface IState {
  router: RouterReducerState<any>
}

export const reducers: ActionReducerMap<IState> = {
  router: routerReducer,
}

export const metaReducers: MetaReducer[] = [
  hydrationMetaReducer,
]

export function logger(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    console.log(`state before: `, state)
    console.log(`action:       `, action)

    return reducer(state, action)
  }
}

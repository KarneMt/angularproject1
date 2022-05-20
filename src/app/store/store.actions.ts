import { Injectable } from '@angular/core';
import { Action, createAction, props } from '@ngrx/store';
import { catchError, map, Observable, of, switchMap } from 'rxjs';
import { Contact, User } from '../Model/model';
import { State } from './store.reducer';
import { RegistrierungComponent } from '../registrierung/registrierung.component';
import { Actions, Effect, ofType } from '@ngrx/effects';



export const increment = createAction('[Store Component] Increment');
export const decrement = createAction('[Store Component] Decrement');
export const reset = createAction('[Store Component] Reset');

export class ActionTypes {
  static LOGOUT = "[App] logout";
}

export class Logout implements Action {
  readonly type = ActionTypes.LOGOUT;
}

export const message = createAction('[Store Component] Message',
  props<{
    contact: Contact
  }>());

export const deletemessage = createAction('[Store Component] Delete Message',
  props<{
    id: string
  }>());

export const updatemessage = createAction('[Store Component] Update Message',
  props<{
    contact: Contact
  }>());

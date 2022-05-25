import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { map, switchMap, concatMap } from "rxjs"
import { Contact } from "../Model/model"
import { ContactService } from "./store.service"

import { createMessage, createMessageSuccess, deleteMessage, deleteMessageSuccess, readMessages, readMessageSuccess, updateMessage, updateMessageSuccess } from "./store.actions"

@Injectable()
export class ContactEffects {

  // Todo
  createMessage$ = createEffect(() => {
    console.log("CreateEffect")
    return this.actions$.pipe(
      ofType(createMessage),
      switchMap(action => {
        return this._contactService.createMessage(action.contact).pipe(
          map(id => createMessageSuccess({ action, id }))
        )
      })
    )
  })

  readMessage$ = createEffect(() => {
    console.log("ReadEffect")
    return this.actions$.pipe(
      ofType(readMessages),
      concatMap(action => this._contactService.readMessages()),
      map((contact: Contact[]) => readMessageSuccess({ contact }))
    )
  })
  updateMessage$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updateMessage),
      switchMap(action => {
        return this._contactService.updateMessage(action.update).pipe(
          map(() => updateMessageSuccess({ update: action.update }))
        )
      })
    )
  })
  deleteMessage$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deleteMessage),
      switchMap(action => {
        return this._contactService.deleteMessage(action.id).pipe(
          map(() => deleteMessageSuccess({ id: action.id }))
        )
      })
    )
  })
  constructor(private actions$: Actions, private _contactService: ContactService) { }
}

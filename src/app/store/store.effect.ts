import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { map, switchMap, concatMap } from "rxjs"
import { Contact } from "../Model/model"
import { ContactService } from "./store.service"

import { createMessage, deletemessage, updatemessage, createMessageSuccess, readMessages, readMessageSuccess } from "./store.actions"

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
  //updateTodo$ = createEffect(() => {
  //  return this.actions$.pipe(
  //    ofType(updateTodo),
  //    switchMap(action => {
  //      return this._todoService.updateTodo(action.update).pipe(
  //        map(() => updateTodoSuccess({ update: action.update }))
  //      )
  //    })
  //  )
  //})
  //deleteTodo$ = createEffect(() => {
  //  return this.actions$.pipe(
  //    ofType(deleteTodo),
  //    switchMap(action => {
  //      return this._todoService.deleteTodo(action.id).pipe(
  //        map(() => deleteTodoSuccess({ id: action.id }))
  //      )
  //    })
  //  )
  //})

  constructor(private actions$: Actions, private _contactService: ContactService) { }
}

import { Injectable } from "@angular/core"
import { select, Store } from "@ngrx/store"
import { Observable } from "rxjs"
import { Contact } from "../Model/model"

import * as MessageAction from './store.actions'
import * as MessageSelectors from './store.selectors'
import * as MessageState from './store.reducer'

import { RootState } from './hydration/index'

@Injectable()
export class ContactFacade {
  Message$ = this.store.pipe(select(MessageSelectors.selectContact)) as Observable<Contact[]>

  constructor(private store: Store<RootState>) { }

  readMessages() {
    console.log("ReadMessage")

    this.store.dispatch(MessageAction.readMessages())
  }
  createMessage(contact: Contact) {
    console.log("CreateMessage")

    this.store.dispatch(MessageAction.createMessage({ contact }))
  }
  updateMessage(update: Contact) {
    this.store.dispatch(MessageAction.updateMessage({ update }))
  }
  deleteMessage(id: string) {
    this.store.dispatch(MessageAction.deleteMessage({ id }))
  }
}

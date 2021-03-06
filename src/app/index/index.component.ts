import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';
import { Contact } from '../Model/model';
import { v4 as uuidv4 } from 'uuid';
import { ContactFacade } from '../store/store.facade'
import { FormBuilder } from '@angular/forms';
import { Auth } from '../shared/auth';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent {
  contactdata: any = {}

  constructor(private cookieService: CookieService, private _formBuilder: FormBuilder, private store: Store<{ contact: Contact }>, public route: Router, private messageFacade: ContactFacade, private auth: Auth) {
    auth.authcheck()
  }

  message(contact: Contact){
    let id: string = uuidv4();
    console.log(id)
    contact.id = id;
    contact.datum = new Date;
    this.contactdata = contact
    console.log(this.contactdata)
    this.anfragenStore = true
    contact.creatorID = "foo:bar"
    const create: Contact = Object.assign({}, contact, { date_create: new Date(), date_update: new Date() })
    this.messageFacade.createMessage(create)
    // TODO: Dispatch an increment action
  }

  anfragenStore: boolean = false
  eingabefehlt: boolean = false
  vornamefehlt: boolean = false
  nachnamefehlt: boolean = false
  emailfehlt: boolean = false
  nachrichtfehlt: boolean = false
  erfolgreich: boolean = false

  onClickSubmit(contact: Contact) {

    if (contact.vorname.length > 0 && contact.nachname.length > 0 && contact.email.length > 0 && contact.nachricht.length > 0) {

      this.message(contact)
      this.eingabefehlt = false
      this.vornamefehlt = false
      this.nachnamefehlt = false
      this.emailfehlt = false
      this.nachrichtfehlt = false
      this.erfolgreich = true

    } else {
      this.eingabefehlt = false
      this.nachnamefehlt = false
      this.vornamefehlt = false
      this.emailfehlt = false
      this.nachrichtfehlt = false
      if (contact.vorname.length < 1) {
        this.eingabefehlt = true
        this.vornamefehlt = true
      }
      if (contact.nachname.length < 1) {
        this.eingabefehlt = true
        this.nachnamefehlt = true
      }
      if (contact.email.length < 1) {
        this.eingabefehlt = true
        this.emailfehlt = true
      }
      if (contact.nachricht.length < 1) {
        this.eingabefehlt = true
        this.nachrichtfehlt = true
      }
    }
  }
  DetailsAnfrage(id: string) {
    this.route.navigate(['/anfragen'], { queryParams: { 'id': id } })
  }

  }

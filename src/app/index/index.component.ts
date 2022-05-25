import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { Contact } from '../Model/model';
import { createMessage, createMessageSuccess } from '../store/store.actions';
import { v4 as uuidv4 } from 'uuid';
import { ContactFacade } from '../store/store.facade'
import { FormArray, FormGroup, FormBuilder } from '@angular/forms';
import { orderBy } from '../shared/helpfunction'


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {
  contactdata: any = {}


  constructor(private cookieService: CookieService, private _formBuilder: FormBuilder, private store: Store<{ contact: Contact }>, public route: Router, private messageFacade: ContactFacade) {
    let value = this.cookieService.get('User-Cookie');
    if (value.length <= 0) {
      this.route.navigate(['/login']);
    }

    

  }
  ngOnInit(): void {
  }

  message(contact: Contact){
    let id: string = uuidv4();
    console.log(id)
    contact.id = id;
    contact.datum = new Date;
    this.contactdata = contact
    console.log(this.contactdata)
    this.anfragenStore = true

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

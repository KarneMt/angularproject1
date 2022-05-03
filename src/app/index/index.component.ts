import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { message } from '../store/store.actions';

export interface Contact {
  vorname: string
  nachname: string
  email: string
  land: string
  adresse: string
  stadt: string
  plz: string
  nachricht: string
}

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit{
  contactdata: any = {
    vorname: '', nachname: '', email: '', land: '', adresse: '', stadt: '', plz: '', nachricht: ''
  }
  
  constructor(private cookieService: CookieService, private store: Store<{ contact: Contact }>,  public route: Router) {
    let value = this.cookieService.get('User-Cookie');
    if (value.length <= 0) {
      this.route.navigate(['/login']);
    }
  }

  message(contact: Contact) {
    this.store.dispatch(message({ vorname: contact.vorname, nachname: contact.nachname, email: contact.email, land: contact.land, adresse: contact.adresse, stadt: contact.stadt, plz: contact.plz, nachricht: contact.nachricht }));
    // TODO: Dispatch an increment action
    console.log(contact)
    console.log(this.contactdata)
  }
  anfragenStore: boolean = true //Button für Storedaten, später löschen
  eingabefehlt: boolean = false
  vornamefehlt: boolean = false
  nachnamefehlt: boolean = false
  emailfehlt: boolean = false
  nachrichtfehlt: boolean = false
  erfolgreich: boolean = false

  onClickSubmit(data: any , contact: Contact) {
    contact.vorname = data.firstname
    contact.nachname = data.lastname
    contact.email = data.emailaddress
    contact.land = data.country
    contact.adresse = data.streetaddress
    contact.stadt = data.city
    contact.plz = data.postalcode
    contact.nachricht = data.nachricht

    this.contactdata = { vorname: data.firstname, nachname: data.lastname, email: data.emailaddress, land: data.country, adresse: data.streetaddress, stadt: data.city, plz: data.postalcode, nachricht: data.nachricht }


    if (contact.vorname.length > 0 && contact.nachname.length > 0 && contact.email.length > 0 && contact.nachricht.length > 0) {

      //AN DATENBANK SENDEN
      this.message(contact)
      this.anfragenStore = true

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

  ngOnInit(): void {
  
  }

}

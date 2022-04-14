import { Component, EventEmitter, OnInit, OnChanges, Input, SimpleChanges, Output } from '@angular/core';
import { Router } from '@angular/router';

interface Contact {
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

  constructor(public route: Router) {
      }

  eingabefehlt: boolean = false
  vornamefehlt: boolean = false
  nachnamefehlt: boolean = false
  emailfehlt: boolean = false
  nachrichtfehlt: boolean = false
  i: number = 0;
  onClickSubmit(data: any , contact: Contact) {
    contact.vorname = data.firstname 
    contact.nachname = data.lastname
    contact.email = data.emailaddress
    contact.land = data.country
    contact.adresse = data.streetaddress
    contact.stadt = data.city
    contact.plz = data.postalcode
    contact.nachricht = data.nachricht



    console.log(contact)

    this.i = +contact.vorname.length;
    console.log(this.i)
    if (contact.vorname.length > 0 && contact.nachname.length > 0 && contact.email.length > 0 && contact.nachricht.length > 0) {

      //AN DATENBANK SENDEN

      this.route.navigate(['/erfolreich']);
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

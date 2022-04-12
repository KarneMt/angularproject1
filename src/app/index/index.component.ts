import { Component, EventEmitter, OnInit, OnChanges, Input, SimpleChanges, Output } from '@angular/core';


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

  constructor() {
  }

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
  }

  ngOnInit(): void {
  }

}

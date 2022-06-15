import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Contact } from '../Model/model';
import { Auth } from '../shared/auth';

@Component({
  selector: 'app-erfolgreich',
  templateUrl: './erfolgreich.component.html',
  styleUrls: ['./erfolgreich.component.css']
})

export class ErfolgreichComponent implements OnInit{

  @Input() contact: Contact = { id: '', vorname: '', nachname: '', beschreibung: '', email: '', land: '', adresse: '', stadt: '', plz: '', nachricht: '', datum: new Date, creatorID: "" }


  constructor(private cookieService: CookieService, private auth: Auth) {
    auth.authcheck()
  }


  ngOnInit(): void {
  }

}

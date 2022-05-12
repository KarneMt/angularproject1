import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Contact } from '../Model/model';

@Component({
  selector: 'app-erfolgreich',
  templateUrl: './erfolgreich.component.html',
  styleUrls: ['./erfolgreich.component.css']
})

export class ErfolgreichComponent implements OnInit{

  @Input() contact: Contact = { id: '', vorname: '', nachname: '', beschreibung: '', email: '', land: '', adresse: '', stadt: '', plz: '', nachricht: '', datum: new Date }


  constructor(private cookieService: CookieService, public route: Router) {
    let value = this.cookieService.get('User-Cookie');
    if (value.length <= 0) {
      this.route.navigate(['/login']);
    }
  }


  ngOnInit(): void {
  }

}

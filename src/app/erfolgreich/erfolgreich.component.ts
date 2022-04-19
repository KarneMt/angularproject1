import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

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
  selector: 'app-erfolgreich',
  templateUrl: './erfolgreich.component.html',
  styleUrls: ['./erfolgreich.component.css']
})
export class ErfolgreichComponent implements OnInit{

  @Input() contact: Contact = { vorname: '', nachname: '', email: '', land: '', adresse: '', stadt: '', plz: '', nachricht: '' }


  constructor(private cookieService: CookieService, public route: Router) {
    let value = this.cookieService.get('User-Cookie');
    if (value.length <= 0) {
      this.route.navigate(['/login']);
    }
  }
  /*constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      vorname: [''],
      nachname: [''],
      email: [''],
      land: [''],
      adresse: [''],
      stadt: [''],
      plz: [''],
      nachricht: ['']
    })
  }
  */

  ngOnInit(): void {
  }

}

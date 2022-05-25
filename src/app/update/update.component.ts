import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';
import { Contact } from '../Model/model';
import { RootState } from '../store/hydration';
import { updateMessage } from '../store/store.actions';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})

export class UpdateComponent {
  idString: string | undefined
  anfragenArray: Contact[] | undefined
  contactdata: any = {}

  person: Contact

  constructor(private route: ActivatedRoute, public router: Router, private cookieService: CookieService, private store: Store<RootState>) {
    let value = this.cookieService.get('User-Cookie');
    if (value.length <= 0) {
      this.router.navigate(['/login']);
    }
    this.route.queryParams.subscribe(params => {
      this.idString = params['id']
      console.log(this.idString)

      store.select('contact').subscribe((saa) => {
        if (saa) {
        //  this.anfragenArray = saa
        }
      })
      this.anfragenArray = this.anfragenArray?.filter((el: Contact) => el.id == this.idString!)
    }
    );

    this.person = {
      id: this.anfragenArray![0].id,
      vorname: this.anfragenArray![0].vorname,
      nachname: this.anfragenArray![0].nachname,
      beschreibung: this.anfragenArray![0].beschreibung,
      email: this.anfragenArray![0].email,
      land: this.anfragenArray![0].land,
      adresse: this.anfragenArray![0].adresse,
      stadt: this.anfragenArray![0].stadt,
      plz: this.anfragenArray![0].plz,
      nachricht: this.anfragenArray![0].nachricht,
      datum: this.anfragenArray![0].datum
    }
  }

  message(contact: Contact) {
    contact.datum = new Date();
    contact.id = this.anfragenArray![0].id
    this.contactdata = contact
    this.anfragenStore = true
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
}

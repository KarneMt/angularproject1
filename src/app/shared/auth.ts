import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';
import { Logout } from '../store/store.actions';

@Injectable()
export class Auth {
  constructor(public router: Router, private cookieService: CookieService, private store: Store<{ count: number }> ) { }

  
  authcheck() {
    let value = this.cookieService.get('User-Cookie');
    if (value == "") {
      this.store.dispatch(new Logout());
      this.router.navigate(['/login']);
    }
  }
}


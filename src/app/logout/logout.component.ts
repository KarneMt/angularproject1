import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Store } from '@ngrx/store';
import { Logout } from '../store/store.actions';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})

export class LogoutComponent implements OnInit {

  constructor(private cookieService: CookieService, private store: Store<{ count: number }> ,public route: Router) {
  }

  ngOnInit(): void {
    this.cookieService.deleteAll()
    sessionStorage.removeItem('User-Session')
    this.store.dispatch(new Logout());
    this.route.navigate(['/login']);
  }
}

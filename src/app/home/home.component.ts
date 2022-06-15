import { Component, Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Auth } from '../shared/auth';
import { cookieDB } from '../../jsonServerConnection';
import { Logout } from '../store/store.actions';
import { Store } from '@ngrx/store';

@Injectable({ providedIn: 'root' }) //DB

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  contact: any = { plz: '12345', strasse: 'Hausmannsweg 1' };
  val: string = 'Test';
  title = 'angularproject1';
  usernameSession: string | null
  check: boolean = false

  private url = `http://localhost:5197/WeatherForecast`; //DB
  array: any[] = []

  constructor(private cookieService: CookieService, public route: Router, private readonly http: HttpClient, private auth: Auth, private store: Store<{ count: number }>) {
    auth.authcheck()
    this.usernameSession = sessionStorage.getItem('User-Session');
    this.array = this.DatenbankWetterAbfragen()
  }

  public arr: any[] = [
    { id: '1', value: 'erster', group: 'team 1' },
    { id: '2', value: 'zweiter', group: 'team 2' },
    { id: '3', value: 'dritter', group: 'team 1' },
    { id: '4', value: 'vierter', group: 'team 2' }
  ]

  DatenbankWetterAbfragen(): any {
    console.log(this.http.get<any>(this.url))
    return this.http.get<any>(this.url);
  }

}

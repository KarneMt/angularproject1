import { Component, Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
  usernameCookie = ''
   
  private url = `http://localhost:5197/WeatherForecast`; //DB
  array: any[] = []

  constructor(private cookieService: CookieService, public route: Router, private readonly http: HttpClient) {
    let value = this.cookieService.get('User-Cookie');
    if (value.length <= 0) {
      this.route.navigate(['/login']);
    } else {
      this.usernameCookie = value
    }

    this.array = this.DatenbankWetterAbfragen()
    console.log(this.array)


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



function subscribe(arg0: any, arg1: void): any[] {
    throw new Error('Function not implemented.');
}

import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  contact: any = { plz: '12345', strasse: 'Hausmannsweg 1' };
  val: string = 'IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII';
  title = 'angularproject1';
  usernameCookie = ''

constructor(private cookieService: CookieService, public route: Router) {
  let value = this.cookieService.get('User-Cookie');
  if (value.length <= 0) {
    this.route.navigate(['/login']);
  } else {
    this.usernameCookie = value
  }
}



  public arr: any[] = [
    { id: '1', value: 'erster', group: 'team 1' },
    { id: '2', value: 'zweiter', group: 'team 2' },
    { id: '3', value: 'dritter', group: 'team 1' },
    { id: '4', value: 'vierter', group: 'team 2' }
  ]


}

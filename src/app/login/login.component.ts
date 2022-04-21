import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = ""
  benutzernamefehlt: boolean = false
  cookieExists: boolean = false
  public cookieValue: string = "";

  constructor(private cookieService: CookieService, public route: Router) {
    let value = this.cookieService.get('User-Cookie');
    if (value.length > 0) {
      this.route.navigate(['/']);
    }
  }

  onClickLogin(user: any) {

    if (user.name.length > 0) {
      this.username = user.name
      this.cookieService.deleteAll()
      this.cookieService.set('User-Cookie', user.name); //Cookie setzen
    }

    this.cookieExists = this.cookieService.check('User-Cookie');

    if (this.cookieExists == true) {
      let page: boolean = false
      if (page == false) {
        page = true
        window.location.reload();
      }
      this.route.navigate(['/']);
    } else {
      this.benutzernamefehlt = true
      this.cookieService.deleteAll()
    }

    this.cookieValue = this.cookieService.get(this.username); // To Get Cookie
    console.log(this.cookieValue)
  }

  ngOnInit(): void {
  }
}

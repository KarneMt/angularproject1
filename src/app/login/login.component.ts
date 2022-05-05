import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required,
    ], []),
    password: new FormControl('', [
      Validators.required
    ])
  });


  constructor(private cookieService: CookieService, public route: Router) {
    this.loginForm.valueChanges.subscribe(console.log)

    let value = this.cookieService.get('User-Cookie');
    if (value.length > 0) {
      this.route.navigate(['/']);
    }
  }

  anmelden(user: any) {
    console.log(user)
    this.cookieService.deleteAll()
    this.cookieService.set('User-Cookie', user.username); //Cookie setzen

    window.location.reload();
    this.route.navigate(['/']);

  }
}

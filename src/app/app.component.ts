import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  userIP = ''
  userNameCookie: boolean = false

  constructor(private httpClient: HttpClient, private cookieService: CookieService, public route: Router) {
    let value = this.cookieService.get('User-Cookie');
    if (value.length > 0) {
      this.userNameCookie = true
    }
  }

  ngOnInit(): void {
    this.loadIp();
  }

  loadIp() {
    this.httpClient.get('https://jsonip.com').subscribe(
      (value: any) => {
        console.log(value);
        this.userIP = value.ip;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  isToggled: boolean = false;

  toggle() {
    this.isToggled = !this.isToggled;
    console.log(this.isToggled)
  }


  
}

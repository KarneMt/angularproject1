import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-menue',
  templateUrl: './menue.component.html',
  styleUrls: ['./menue.component.css']
})

export class MenueComponent implements OnInit {

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

  isToggledmenue: boolean = false;

  togglemenue() {
    this.isToggledmenue = !this.isToggledmenue;
  }

  isToggled: boolean = false;

  toggle() {
    this.isToggled = !this.isToggled;
  }

  reload() {
    window.location.reload()
  }
}

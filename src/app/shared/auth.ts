import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';
import { cookieDB } from '../../jsonServerConnection';
import { Logout } from '../store/store.actions';

@Injectable()
export class Auth {
  constructor(public router: Router, private cookieService: CookieService, private store: Store<{ count: number }>, private httpClient: HttpClient) { }
  auth: any

  authcheck() {
    let value = this.cookieService.get('User-Cookie');
    if (value == "") {
      this.store.dispatch(new Logout());
      this.router.navigate(['/login']);
    } else {
      let today: Date = new Date()
      let i: number = cookievalue.length
      let n: number = 0
      while (n > i) {
        cookievalue[n]
        let fd: Date = new Date(cookievalue[n].ablauf)
        console.log(fd)
        console.log(today)



        if (fd.getDate < today.getDate) {
          this.deleteDb(cookievalue[n].id).subscribe(succes => true, error => alert(error))
          this.cookieService.deleteAll()
          this.store.dispatch(new Logout());
          this.router.navigate(['/login']);
        } else {
          if (cookievalue[n].id == value) {
            console.log("ID PASST")
            this.auth = cookievalue[n]
          } else {
            this.cookieService.deleteAll()
            this.store.dispatch(new Logout());
            this.router.navigate(['/login']);
          }
        }
        n++
        console.log("i: " + i + " & n: " + n)
      }
    }
  }

  deleteDb(id: string) {
    return this.httpClient.delete(cookieDB + "/" + id)
  }
}

var cookievalue: any = getCookie("")

//GET all oder mit value 
function getCookie(value: string | undefined): any {
  let daten: any = []
  if (value != undefined) {
    fetch(cookieDB + value)
      .then(res => res.json())
      .then(json => {
        json.map((data: any) => {
          daten.push(data)
        })
      })
  }
  return daten
}

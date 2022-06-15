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
  check: boolean = false
  arr: any[] = []
  authcheck() {
    let value = this.cookieService.get('User-Cookie');
    if (value == "") {
      this.store.dispatch(new Logout());
      this.router.navigate(['/login']);
    } else {
      let today: Date = new Date()

      //cookievalue.then((result: any) => {

      //  console.log(result)
      //  console.log(value)
      //  let fd: Date = new Date(result.ablauf)
      //  console.log(fd)
      //  console.log(today)
      //  //setTimeout(() => { this.router.navigate(['/']); }, 50000);
      //  if (fd < today) {
      //    this.deleteDb(result.id).subscribe(succes => true, error => alert(error))
      //    this.cookieService.deleteAll()
      //    this.store.dispatch(new Logout());
      //    this.router.navigate(['/login']);
      //    console.log("Delete: " + result.id)
      //  } else {
      //    if (result.id == value) {
      //      console.log("ID PASST")
      //      this.auth = result
      //      this.check = true
      //    }
      //  }
      //})
      let i: number = cookievalue.length
      let n: number = 0
      while (n < i) {
        console.log(cookievalue[n])
        console.log(value)
        cookievalue[n]
        let fd: Date = new Date(cookievalue[n].ablauf)
        console.log(fd)
        console.log(today)
        //setTimeout(() => { this.router.navigate(['/']); }, 50000);
        if (fd < today) {
          this.deleteDb(cookievalue[n].id).subscribe(succes => true, error => alert(error))
          console.log("Delete: " + cookievalue[n].id)
        } else {
          if (cookievalue[n].id == value) {
            console.log("ID PASST")
            this.auth = cookievalue[n]
            this.check = true
            break
          }
        }
        n++
        console.log("i: " + i + " & n: " + n)
      }

      if (value != "") {
        this.check = true
      }
      //Derzeit ist jeder angemeldet wenn ein Cookie existiert, obige Funktion wird nicht ausgeführt ??

      if (this.check == false) {
        this.cookieService.deleteAll()
        this.store.dispatch(new Logout());
        this.router.navigate(['/login']);
      }
    }
  }
  deleteDb(id: string) {
    return this.httpClient.delete(cookieDB + "/" + id)
  }
}

var cookievalue: any = afunc("")
//Eigentlich direkt nach der ID suchen, hier jedoch nicht um alte Einträge aus der DB löschen zu können


async function afunc(item: string) {
  let res = await getCookie(item);
  return res
}


//GET all oder mit value 
function getCookie(value: string | undefined): Promise<any[]> {
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
  return new Promise<any>((resolve, reject) => {
    resolve(daten)
  })
}

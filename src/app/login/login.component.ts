import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact, User, Cookie } from '../Model/model';
import { cookieDB, userDB } from '../../jsonServerConnection';
import { HttpClient } from '@angular/common/http';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  //todoForm: FormGroup
  //todoArray: FormArray
  cont: Contact[] = []
  check: boolean = false
  user!: User;
  cookie: Cookie = { id: "", ablauf: new Date() }
  ll: any
  rememberme: boolean = false
  public loginForm: FormGroup = new FormGroup({
    usermail: new FormControl('', [
      Validators.required,
    ], []),
    password: new FormControl('', [
      Validators.required
    ], [])
  });

  constructor(private cookieService: CookieService, public route: Router, public httpclient: HttpClient) {
    this.loginForm.valueChanges.subscribe(console.log)
    let value = this.cookieService.get('User-Cookie')
    console.log(value)
    if (value != "") {
      this.route.navigate(['/']);
    }
  }

  remember(event: any) {
    if (this.rememberme == false) {
      this.rememberme = true
    } else {
      this.rememberme = false
    }
  }

  createDb(cookie: Cookie) {
    console.log(cookie)
    return this.httpclient.post(cookieDB, cookie)

  }

  anmelden(user: any) {
    this.cookieService.deleteAll()
    let password: string = this.hash(user.password)
    let i: number = mail.length
    let n: number = 0
    console.log(password)
    console.log(i)
    while (n < i) {
      mail[n]
      console.log(mail[n].email)

      if (mail[n].email == user.usermail) {
        console.log("MAIL PASST")
        this.ll = mail[n]
        if (this.ll.password == password) {
          console.log(user.usermail)
          console.log(mail[n].email)
          console.log(this.ll)
          console.log(this.ll.password)
          console.log(password)

          console.log(this.rememberme)
          this.cookie.id = uuidv4();
          let time = new Date()
          if (this.rememberme == false) {

            console.log(time)
            time.setTime(time.getTime() + 86400000); //1 Tage angemeldet bleiben
            console.log(time.toLocaleString())

            this.cookie.ablauf = time
            this.createDb(this.cookie).subscribe(succes => true, error => alert(error))
            this.cookieService.set('User-Cookie', this.cookie.id, { expires: 1 }); //Cookie setzen
          } else {

            time.setTime(time.getTime() + 1209600000); //14 Tage angemeldet bleiben
            console.log(time.toLocaleString())
            this.cookie.ablauf = time
            this.createDb(this.cookie).subscribe(succes => true, error => alert(error))
            this.cookieService.set('User-Cookie', this.cookie.id, { expires: 14 }); //Cookie setzen
          }
          window.location.reload();
          break
        } else {
          console.log("PAssworet")
          this.check = true
          break
        }
      }

      n++
      console.log("i: " + i + " & n: " + n)
      if (n == i) {
        console.log("mail")
        this.check = true
      }
    }
    //this.httpclient.get(userDB).subscribe((users: any) => {
    //})
  }



  hash(item: string): string {
    let salt: string = "S>JZatc@Uk#8Lp4LF3Wr6uta-d=p,8}),pqVjV8{azepZ=.%2X)GAAb§g+K=u%f."
    var hash = require('object-hash');
    let password: string = item + salt
    console.log(item)
    item = hash({ password })
    return item
  }
}

var mail: any = getUser("")


//GET all oder mit value 
function getUser(value: string | undefined): any {
  let daten: any = []
  if (value != undefined) {

    fetch(userDB + value)
      .then(res => res.json())
      .then(json => {
        json.map((data: any) => {
          daten.push(data)
        })
      })
  }
  return daten
}

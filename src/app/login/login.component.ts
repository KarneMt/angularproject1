import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../Model/model';
import { userDB } from '../../jsonServerConnection';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  //todoForm: FormGroup
  //todoArray: FormArray
  cont: Contact[] = []
  check : boolean = false

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
    this.cookieService.deleteAll()
    let password: string = this.hash(user)

    emailr = user.username
    console.log(epwd)
    let email: string = mail
    epwd = user.password 
    let passwort : string = pwd



    console.log(email)
    console.log(user.username) //
    console.log(passwort)
    console.log(password) //


    if (mail == user.username && pwd == password) {
      console.log("TEST")

      this.cookieService.set('User-Cookie', user.username); //Cookie setzen
      window.location.reload();

    } else {
      this.check = true
    }


  }



  hash(nutzer: any): string {
    let salt: string = "S>JZatc@Uk#8Lp4LF3Wr6uta-d=p,8}),pqVjV8{azepZ=.%2X)GAAb§g+K=u%f."
    let pwd: string = nutzer.pwd
    var hash = require('object-hash');
    pwd = pwd + salt
    nutzer.pwd = hash({ pwd })
    return nutzer.pwd
  }
}

var emailr: any
var epwd : any

var mail: any = getUser(emailr)
var pwd: any = getUser(epwd)

//GET all oder mit value 
function getUser(value: string | undefined): any {
  let src: string = "?q=" + value
  let daten: any = []
  fetch(userDB + src)
    .then(res => res.json())
    .then(json => {
      json.map((data: { email: any; }) => {
        daten.push(data)
      })
    })
  return daten
}

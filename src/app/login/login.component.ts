import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact, User } from '../Model/model';
import { userDB } from '../../jsonServerConnection';
import { HttpClient } from '@angular/common/http';

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
  ll: any 
  public loginForm: FormGroup = new FormGroup({
    usermail: new FormControl('', [
      Validators.required,
    ], []),
    password: new FormControl('', [
      Validators.required
    ])
  });

  constructor(private cookieService: CookieService, public route: Router, public httpclient: HttpClient) {
    this.loginForm.valueChanges.subscribe(console.log)
    let value = this.cookieService.get('User-Cookie');
    if (value.length > 0) {
      this.route.navigate(['/']);
    }
  }

  anmelden(user: any) {
    this.cookieService.deleteAll()
    let password: string = this.hash(user)
    let pwd: string = ""
    mail.forEach((value: any) => {
      console.log(value.email)
      console.log(user.usermail)
      if (value.email == user.usermail) {
        this.ll = value
        if (this.ll.password === password) {

          this.cookieService.set('User-Cookie', user.usermail); //Cookie setzen
          window.location.reload();

        } else {
          this.check = true
        }
      }
    });

    console.log(this.ll)

    //this.httpclient.get(userDB).subscribe((users: any) => {
    //})

    console.log(this.ll.email)
    console.log(user.usermail)
    console.log(this.ll.password)
    console.log(password)
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

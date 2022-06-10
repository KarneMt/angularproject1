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
    let value = sessionStorage.getItem('User-Session');
    console.log(value)
    if (value != null) {
      this.route.navigate(['/']);
    }
  }

  anmelden(user: any) {
    this.cookieService.deleteAll()
    let password: string = this.hash(user.password)
    let i: number = mail.length
    let n: number = 0
    console.log(i)
    while (n < i) {
      mail[n]
      console.log(mail[n].email)

      if (mail[n].email == user.usermail) {
        console.log("MAIL PASST")
        this.ll = mail[n]
        if (this.ll.password === password) {
          console.log(user.usermail)
          console.log(mail[n].email)
          console.log(this.ll)
          console.log(this.ll.password)
          console.log(password)
          //this.cookieService.set('User-Cookie', user.usermail); //Cookie setzen
          sessionStorage.setItem('User-Session', user.usermail)
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



  hash(password: string): string {
    console.log(password)
    let salt: string = "S>JZatc@Uk#8Lp4LF3Wr6uta-d=p,8}),pqVjV8{azepZ=.%2X)GAAb§g+K=u%f."
    var hash = require('object-hash');
    password = password + salt
    password = hash({ password })
    console.log(password)
    return password
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

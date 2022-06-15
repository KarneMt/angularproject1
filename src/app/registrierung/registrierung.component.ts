import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../Model/model';
import { v4 as uuidv4 } from 'uuid';
import { HttpClient } from '@angular/common/http';
import { userDB } from '../../jsonServerConnection';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-registrierung',
  templateUrl: './registrierung.component.html',
  styleUrls: ['./registrierung.component.css']
})

export class RegistrierungComponent implements OnInit {

  public loginForm: FormGroup = new FormGroup({
    firstname: new FormControl('', [
      Validators.required,
    ], []),
    lastname: new FormControl('', [
      Validators.required
    ], []),
    mail: new FormControl('', [
      Validators.required
    ], []),
    smail: new FormControl('', [
      Validators.required
    ], []),
    adresse: new FormControl('', [
      Validators.required
    ], []),
    city: new FormControl('', [
      Validators.required
    ], []),
    plz: new FormControl('', [
      Validators.required
    ], []),
    pwd: new FormControl('', [
      Validators.required
    ], []),
    spwd: new FormControl('', [
      Validators.required
    ], [])
  });

  first: boolean = true
  exist: boolean = false
  error: boolean = false
  succes: boolean = false
  checkmail: boolean = true
  checkpassword: boolean = true
  nutzer!: User | undefined
  zu$: Observable<User[]> | undefined

  constructor(private httpClient: HttpClient, public route: Router, public cookieService: CookieService) { }

    ngOnInit(): void {
      this.cookieService.deleteAll()

    }

  KontoErstellen(user: any) {
    this.succes = false
    this.exist = false
    this.error = false
    this.checkpassword = true
    this.checkmail = true
    let uuid: string = uuidv4();
    this.nutzer = {
      id: uuid,
      vorname: user.firstname,
      nachname: user.lastname,
      email: user.mail,
      adresse: user.adresse,
      stadt: user.city,
      plz: user.plz,
      datum: new Date,
      lastUpdate: new Date,
      password: user.pwd
    }
    mail = this.nutzer.email
    //let value: string | undefined
    //value = "kaiarnekai@gmail.com"
    //this.zu$ = this.getUser(value)
    //console.log(this.zu$)

    console.log(daten)
    daten.forEach((value: any) => {
      console.log(value.email)
      console.log(mail)
      if (value.email === mail) {
        this.exist = true
        this.error = true
        console.log("J")
      }
    });

    if (user.mail != user.smail) {
      this.checkmail = false
      this.error = true
    }

    if (user.pwd != user.spwd) {
      this.checkpassword = false
      this.error = true
    }

    if (user.mail == user.smail && user.pwd == user.spwd && this.error == false) {
      this.checkmail = false
      this.checkpassword = false
      this.error = false
      this.nutzer.password = this.hash(this.nutzer.password)
      console.log(this.nutzer.password)
      if (this.exist === false && this.first === true) {
        console.log(this.nutzer)
        this.createUser(this.nutzer).subscribe(succes => this.succes = true, error => alert(error))
        this.first = false
        setTimeout(() => { this.route.navigate(['/login']); }, 5000);
      }
    }
  }

  hash(password: string): string {
    let salt: string = "S>JZatc@Uk#8Lp4LF3Wr6uta-d=p,8}),pqVjV8{azepZ=.%2X)GAAb§g+K=u%f."
    console.log(password)
    var hash = require('object-hash');
    password = password+salt
    password = hash({ password })
    console.log(password)
    return password
  }

  //POST
  createUser(user: User) {
    return this.httpClient.post(userDB, user);
  }

  //GET all oder mit value 
  //  getUser(value: string | undefined): any {

  //    let t : string = "?q="+value
  //    let dat: any = []
  //    fetch(userDB+t)
  //      .then(res => res.json())
  //      .then(json => {
  //        json.map((data: { email: any; }) => {
  //          dat.push(data)
  //        })
  //      })
  //    console.log(dat)
  //    return dat
  //  }
}

var mail: string = ""
export const daten: any = getUser(mail)

//GET all oder mit value 
function getUser(value: string | undefined): any {
  let email: string = "?q=" + value
  let daten: any = []
  fetch(userDB + email)
    .then(res => res.json())
    .then(json => {
      json.map((data: { email: any; }) => {
        daten.push(data)
      })
    })
  return daten
}

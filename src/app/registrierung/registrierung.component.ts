import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../Model/model';
import { v4 as uuidv4 } from 'uuid';
import { HttpClient } from '@angular/common/http';
import { userDB } from '../../jsonServerConnection';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrierung',
  templateUrl: './registrierung.component.html',
  styleUrls: ['./registrierung.component.css']
})

export class RegistrierungComponent {

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
    adresse: new FormControl('', [
      Validators.required
    ], []),
    city: new FormControl('', [
      Validators.required
    ], []),
    plz: new FormControl('', [
      Validators.required
    ])
  });

  first: boolean = true
  exist: boolean = false
  succes: boolean = false
  nutzer!: User | undefined
  zu$: Observable<User[]> | undefined

  constructor(private httpClient: HttpClient, public route: Router) { }

  KontoErstellen(user: any) {
    this.succes = false
    this.exist = false
    let uuid: string = uuidv4();
    this.nutzer = {
      id: uuid,
      vorname: user.firstname,
      nachname: user.lastname,
      email: user.mail,
      adresse: user.adresse,
      stadt: user.city,
      plz: user.plz,
      datum: new Date
    }
    mail = this.nutzer.email
    //let value: string | undefined
    //value = "kaiarnekai@gmail.com"
    //this.zu$ = this.getUser(value)
    //console.log(this.zu$)

    console.log(daten)
    daten.forEach( (value: any) => {
      if (value.email == mail) {
        this.exist = true
      }
    });

    if (this.exist === false && this.first === true) {
      this.createTraveller(this.nutzer).subscribe(succes => this.succes = true, error => alert(error))
      this.first = false
      setTimeout(() => { this.route.navigate(['/login']); }, 5000);
    }
  }

  //POST
  createTraveller(user: User) {
    return this.httpClient.post(userDB, user);
  }

  //GET all oder mit value 
  getUser(value: string | undefined) : any {
    let t : string = "?q="+value
    let dat: any = []
    fetch(userDB+t)
      .then(res => res.json())
      .then(json => {
        json.map((data: { email: any; }) => {
          dat.push(data)
        })
      })
    console.log(dat)
    return dat
  }
}

var mail : string = ""
export const daten: any = getUser(mail)

function getUser(value: string | undefined) : any {
  let email: string = "?q=" + value
  let daten: any = []
  fetch(userDB+email)
    .then(res => res.json())
    .then(json => {
      json.map((data: { email: any; }) => {
        daten.push(data)
        console.log(data)
      })
    })
  console.log(daten)
  return daten
}

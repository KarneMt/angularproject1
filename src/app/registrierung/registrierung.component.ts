import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../Model/model';
import { v4 as uuidv4 } from 'uuid';
import { HttpClient } from '@angular/common/http';
import { userDB } from '../../jsonServerConnection';

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

  nutzer: User | undefined
  user: User | undefined
  mail: string = "kaiarnekai@gmail.com"
  constructor(private httpClient: HttpClient) { }

  KontoErstellen(user: any) {


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
    console.log(this.nutzer)


    let value: string | undefined
    let a: User[] = this.getUser(value)
    console.log(a)


    a.forEach((el: User) => {
      console.log(el.email)
      setTimeout(() => { console.log("World!"); }, 5000);
    });

   this.createTraveller(this.nutzer).subscribe(succes => alert("Done"), error => alert(error))
  }

  //POST
  createTraveller(traveller: User) {
    return this.httpClient.post(userDB, traveller);
  }


  //GET all oder mit value
  getUser(value: string | undefined): any {
    if (value == undefined) {
      let ar: any = []
      this.httpClient.get(userDB + "/").subscribe((data) => ar.push(data));
      return ar
    } else {
      return this.httpClient.get(userDB + "/" + value).subscribe((data) => console.log(data));
    }
  }
}

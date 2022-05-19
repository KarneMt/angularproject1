import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../Model/model';
import { v4 as uuidv4 } from 'uuid';
import { HttpClient } from '@angular/common/http';
import { userDB } from '../../jsonServerConnection';
import { Observable } from 'rxjs';
import { waitForAsync } from '@angular/core/testing';

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
  b: any
  in : any

  constructor(private httpClient: HttpClient) {}

  async KontoErstellen(user: any) {


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
    value = "kaiarnekai@gmail.com"
    let a: any = undefined

    a = this.getUser(value)
    
    console.log(a)
    this.b = a








    this.createTraveller(this.nutzer).subscribe(succes => alert("Done"), error => alert(error))
  }

  //POST
  createTraveller(traveller: User) {
    return this.httpClient.post(userDB, traveller);
  }

  //GET all oder mit value
  getUser(value: string | undefined) : any {
    let ar: any = []
    let index : any
    this.httpClient.get(userDB).forEach(function (item){
      ar.push(item)
    })

    let lokal : any = ar.find((lokal: { vorname: any; }) => lokal.vorname === "Kai Arne");

    console.log(lokal)

    //ar.forEach(function (item: any) {
    //  console.log(item)
    //})
    console.log(ar)
    return ar
  }
}

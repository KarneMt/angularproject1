import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  constructor() { }

}

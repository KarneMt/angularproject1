import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';
import { Contact } from '../Model/model';
import { orderBy } from '../shared/helpfunction';
import { RootState } from '../store/hydration';
import { ContactFacade } from '../store/store.facade'
import { FormArray, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  anfragenArray: Contact[] | undefined
  data: Contact[] | undefined
  todoForm: FormGroup
  todoArray: FormArray
  cont: Contact[] = []

  constructor(private cookieService: CookieService, private messageFacade: ContactFacade, private _formBuilder: FormBuilder, private store: Store<RootState>, public route: Router) {
    let value = this.cookieService.get('User-Cookie');
    if (value.length <= 0) {
      this.route.navigate(['/login']);
    }
    this.messageFacade.readMessages()
    this.todoForm = this._formBuilder.group({
      contact: this._formBuilder.array([
      ]),
    })
    this.todoArray = <FormArray>this.todoForm.get('contact')
  }
  ngOnInit(): void {
    this.messageFacade.Message$.pipe().subscribe((data: Contact[]) => {
      this.cont = orderBy(data, 'datum')
      this.patch()
    })
  }

  patch() {
    this.todoArray.clear()
    this.cont.forEach((el: any) => {
      this.todoArray.push(this.patchElements(el))
    })
  }

  patchElements(el: any) {
    return this._formBuilder.group({
      id: [el.id],
      datum: [el.datum],
      adresse: [el.adresse],
      beschreibung: [el.beschreibung],
      email: [el.email],
      land: [el.cland],
      nachname: [el.nachname],
      nachrichte: [el.nachrichte],
      vorname: [el.vorname],
      stadt: [el.stadt],
      plz: [el.plz],
    })
  }

  DetailsAnfrage(id: string) {
    this.route.navigate(['/anfragen'], { queryParams: { 'id': id } })
  }

  EntferneAnfrage(id: string) {
    this.messageFacade.deleteMessage(id)
   // window.location.reload();
  }

  UpdateAnfrage(id: string) {
    this.route.navigate(['/update'], { queryParams: { 'id': id } });
  }
}



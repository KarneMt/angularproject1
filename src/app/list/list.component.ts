import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';
import { Observable, Subscription } from 'rxjs';
import { Contact } from '../Model/model';
import { RootState } from '../store/hydration';
import { deletemessage } from '../store/store.actions';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  anfragenArray: Contact[] | undefined
  data: Contact[] | undefined

  constructor(private cookieService: CookieService, private store: Store<RootState>, public route: Router) {
    let value = this.cookieService.get('User-Cookie');
    if (value.length <= 0) {
      this.route.navigate(['/login']);
    }
    store.select('contact').subscribe((saa) => {
      if (saa) {
        this.data = saa
        this.anfragenArray = this.data
      }
    })

  }

  DetailsAnfrage(id: string) {
    this.route.navigate(['/anfragen'], { queryParams: { 'id': id } })
  }

  EntferneAnfrage(id: string) {
    this.store.dispatch(deletemessage({ id }))
    window.location.reload();
  }

  UpdateAnfrage(id: string) {
    this.route.navigate(['/update'], { queryParams: { 'id': id }});
  }
}



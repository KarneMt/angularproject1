import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { Contact} from '../Model/model';
import { loadAnfragen } from '../store/store.selectors'

@Component({
  selector: 'app-anfragen',
  templateUrl: './anfragen.component.html',
  styleUrls: ['./anfragen.component.css']
})

export class AnfragenComponent implements OnInit {
  contact$: Observable<Contact[]>;

  constructor(private cookieService: CookieService, private store: Store, public route: Router) {
    let value = this.cookieService.get('User-Cookie');
    if (value.length <= 0) {
      this.route.navigate(['/login']);
    }
    this.contact$ = store.select(loadAnfragen);
  }

  ngOnInit(): void {
  }

}

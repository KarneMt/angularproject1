import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';
import { LoescheAnfrage } from '../delete/delete.component';
import { Contact } from '../Model/model';
import { RootState } from '../store/hydration';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  anfragenArray: Contact[] | undefined

  constructor(private cookieService: CookieService, private store: Store<RootState>, public route: Router) {
    let value = this.cookieService.get('User-Cookie');
    if (value.length <= 0) {
      this.route.navigate(['/login']);
    }
    store.select('contact').subscribe((data: Contact[]) => {
      if (data) {
        this.anfragenArray = data
      }
    })


  }

  EntferneAnfrage() {

     console.log("nicht belegt")

  }

  ngOnInit(): void {
  }

}

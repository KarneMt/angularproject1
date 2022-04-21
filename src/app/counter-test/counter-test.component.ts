import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { increment, decrement, reset } from '../store.actions';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-counter-test',
  templateUrl: './counter-test.component.html',
  styleUrls: ['./counter-test.component.css']
})
export class CounterTestComponent implements OnInit {
  count$: Observable<number>;

  constructor(private cookieService: CookieService, private store: Store<{ count: number }> , public route: Router) {
    let value = this.cookieService.get('User-Cookie');
    if (value.length <= 0) {
      this.route.navigate(['/login']);
    }
    this.count$ = store.select('count');
    // TODO: Connect `this.count$` stream to the current store `count` state
  }

  increment() {
    this.store.dispatch(increment());
    // TODO: Dispatch an increment action
  }

  decrement() {
    this.store.dispatch(decrement());
    // TODO: Dispatch a decrement action
  }

  reset() {
    this.store.dispatch(reset());
    // TODO: Dispatch a reset action
  }

  reload() {
    window.location.reload()
  }

  ngOnInit(): void {
  }

}

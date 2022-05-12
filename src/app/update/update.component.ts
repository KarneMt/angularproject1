import { Component} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';
import { Contact } from '../Model/model';
import { RootState } from '../store/hydration';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})

export class UpdateComponent{
  idString: string | undefined
  anfragenArray: Contact[] | undefined

  constructor(private route: ActivatedRoute, private cookieService: CookieService, private store: Store<RootState>) {
    this.route.queryParams.subscribe(params => {
      this.idString = params['id']
      console.log(this.idString)

      store.select('contact').subscribe((saa) => {
        if (saa) {
          this.anfragenArray = saa
        }
        console.log(this.anfragenArray)
      })
      this.anfragenArray = this.anfragenArray?.filter((el) => el.id == this.idString)
      console.log(this.anfragenArray)


    });
  }
}

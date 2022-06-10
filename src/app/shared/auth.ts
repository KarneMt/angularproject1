import { Router } from '@angular/router';

export class Auth {
  constructor(public router : Router){}

  authcheck() {
    let value = sessionStorage.getItem('User-Session');
    console.log(value)
    if (value == null) {
      this.router.navigate(['/login']);
    }
  }
}


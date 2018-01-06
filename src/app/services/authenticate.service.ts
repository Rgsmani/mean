import { Injectable } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

const users = [
  new UserComponent('admin', 'admin'),
  new UserComponent('admin1', 'admin1')
];

@Injectable()
export class AuthenticateService {

  user: any = [];
  private _postUrl = 'http://localhost:3000/api/checkuser';

  constructor(private _router: Router, private _http: Http) { }

  logout() {
    // localStorage.removeItem("user");
    this._router.navigate(['/login']);
  }

  login(user) {

    console.log('user', user);

    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this._http.post(this._postUrl, JSON.stringify(user), options)
      .map((response: Response) => response.json());

  }

  checkCredentials() {
    if (localStorage.getItem('user') === null) {
      this._router.navigate(['/login']);
    }
  }
}

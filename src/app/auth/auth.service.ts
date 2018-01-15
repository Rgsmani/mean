import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class AuthService {

  userProfile: any;

  user: any = [];
  private _postUrl = 'http://localhost:3000/api/checkuser';
  // Create a stream of logged in status to communicate throughout app
  loggedIn: boolean;
  loggedIn$ = new BehaviorSubject<boolean>(this.loggedIn);

  constructor(private router: Router, private _http: Http) {
    // If authenticated, set local profile property and update login status subject
    // If token is expired, log out to clear any data from localStorage
    // if (this.authenticated) {
    //   this.userProfile = JSON.parse(localStorage.getItem('user'));
    //   this.setLoggedIn(true);
    //   this.router.navigate(['/home']);
    // } else {
    //   this.logout();
    // }
  }

  setLoggedIn(value: boolean) {
    // Update login status subject
    this.loggedIn$.next(value);
    this.loggedIn = value;
  }

  login(user) {
    console.log('user', user);

    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this._http.post(this._postUrl, JSON.stringify(user), options)
      .map((response: Response) => {
        const authResult = response.json();

        if (authResult._id) {
          console.log('authResult._id', authResult._id);
          const expTime = (1000 * 60 * 60 * 24) + Date.now();
          console.log('expTime', expTime);
          // Save session data and update login status subject
          localStorage.setItem('user', authResult);
          // localStorage.setItem('id_token', authResult.idToken);
          localStorage.setItem('expires_at', JSON.stringify(expTime));
          this.userProfile = authResult;
          this.setLoggedIn(true);
        }
        return response.json();
      });
  }




  logout() {
    // Remove tokens and profile and update login status subject
    localStorage.removeItem('user');
    localStorage.removeItem('expires_at');
    this.userProfile = undefined;
    this.setLoggedIn(false);
    this.router.navigate(['/login']);
  }

  get authenticated(): boolean {
    // Check if current date is greater than expiration
    console.log('authenticated');
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    console.log('expiresAt', expiresAt);
    console.log('Date.now()', Date.now());
    return Date.now() < expiresAt;

  }

}

import { Injectable } from '@angular/core';
import {UserComponent} from "../user/user.component";
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

var users = [
  new UserComponent('admin','admin'),
  new UserComponent('admin1','admin1')
];

@Injectable()
export class AuthenticateService {

user: any = [];
  private _postUrl =  "http://localhost:3000/api/checkuser";

  constructor(private _router: Router, private _http: Http) { }

  logout() {
    localStorage.removeItem("user");
    this._router.navigate(['/login']);
  }

  login(user) {

  console.log(user);
  
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({ headers: headers });
    this._http.post(this._postUrl, JSON.stringify(user), options)
        .map((response: Response) => {
          // console.log('response.json()');       
          // console.log(response.json()); 
         this.user = response.json();  
         console.log('this.user');
          console.log(this.user);
          let authenticatedUser = this.user.find(u => u.username === user.username);
          if (authenticatedUser && authenticatedUser.password === user.password){
            localStorage.setItem("user", authenticatedUser.username);
            this._router.navigate(['/home']);
            return true;
          }
          return false;   
        });

 

   
  }

  checkCredentials() {
    if (localStorage.getItem("user") === null){
      this._router.navigate(['/login']);
    }
  }
}

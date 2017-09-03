import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from '../models/userModel';

@Injectable()
export class UsersService {

private _getUrl =  "http://localhost:3000/api/users";
  private _postUrl =  "http://localhost:3000/api/saveuser";
  private _putUrl =  "http://localhost:3000/api/updateuser/";
  private _deleteUrl =  "http://localhost:3000/api/deleteuser/";

 
  constructor(private _http: Http) { }

  getUsers(){
    return this._http.get(this._getUrl)
    .map((response: Response) => response.json());
  }

   AddUser(user: User){
      console.log("inservice");
      console.log(user);
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({ headers: headers });
      return this._http.post(this._postUrl, JSON.stringify(user), options)
        .map((response: Response) => response.json());
  }

  updateUser(value: User){
       console.log("in service update");
      console.log(value);
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({ headers: headers });
    return this._http.put(this._putUrl + value._id, JSON.stringify(value), options)
      .map((response: Response) => response.json());
    
  }
 deleteUser(value: User){
     return this._http.delete(this._deleteUrl + value._id)
      .map((response: Response) => response.json());
  }
  

}

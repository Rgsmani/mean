import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Role } from '../models/roleModel';


@Injectable()
export class RoleService {

  private _getUrl =  'http://localhost:3000/api/roles';
  private _postUrl =  'http://localhost:3000/api/saverole';
  private _putUrl =  'http://localhost:3000/api/updaterole/';
  private _deleteUrl =  'http://localhost:3000/api/deleterole/';


  constructor(private _http: Http) { }

  getRoles() {
    return this._http.get(this._getUrl)
    .map((response: Response) => response.json());
  }

  addRole(role: Role) {
      console.log('inservice');
      console.log(role);
      const headers = new Headers({'Content-Type': 'application/json'});
      const options = new RequestOptions({ headers: headers });
      return this._http.post(this._postUrl, JSON.stringify(role), options)
        .map((response: Response) => response.json());
  }
  updateRole(value: Role) {
       console.log('in service update');
      console.log(value);
      const headers = new Headers({'Content-Type': 'application/json'});
      const options = new RequestOptions({ headers: headers });
    return this._http.put(this._putUrl + value._id, JSON.stringify(value), options)
      .map((response: Response) => response.json());

  }
  deleteRole(value: Role) {
     return this._http.delete(this._deleteUrl + value._id)
      .map((response: Response) => response.json());
  }
}

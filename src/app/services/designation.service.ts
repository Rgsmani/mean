import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Designation } from '../models/designationModel';

@Injectable()
export class DesignationService {

  private _getUrl =  'http://localhost:3000/api/designations';
  private _postUrl =  'http://localhost:3000/api/savedesignation';
  private _putUrl =  'http://localhost:3000/api/updatedesignation/';
  private _deleteUrl =  'http://localhost:3000/api/deletedesignation/';


  constructor(private _http: Http) { }

  getDesignations() {
    return this._http.get(this._getUrl)
    .map((response: Response) => response.json());
  }

  addDesignation(des: Designation) {
      console.log('inservice');
      console.log(des);
      const headers = new Headers({'Content-Type': 'application/json'});
      const options = new RequestOptions({ headers: headers });
      return this._http.post(this._postUrl, JSON.stringify(des), options)
        .map((response: Response) => response.json());
  }
  updateDesignation(value: Designation) {
       console.log('in service update');
      console.log(value);
      const headers = new Headers({'Content-Type': 'application/json'});
      const options = new RequestOptions({ headers: headers });
    return this._http.put(this._putUrl + value._id, JSON.stringify(value), options)
      .map((response: Response) => response.json());

  }
  deleteDesignation(value: Designation) {
     return this._http.delete(this._deleteUrl + value._id)
      .map((response: Response) => response.json());
  }
}

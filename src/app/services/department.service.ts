import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Department } from '../models/departmentModel';


@Injectable()
export class DepartmentService {

  private _getUrl =  'http://localhost:3000/api/departments';
  private _postUrl =  'http://localhost:3000/api/savedepartment';
  private _putUrl =  'http://localhost:3000/api/updatedepartment/';
  private _deleteUrl =  'http://localhost:3000/api/deletedepartment/';


  constructor(private _http: Http) { }

  getDepartments() {
    return this._http.get(this._getUrl)
    .map((response: Response) => response.json());
  }

  addDepartment(depart: Department) {
      console.log('inservice');
      console.log(depart);
      const headers = new Headers({'Content-Type': 'application/json'});
      const options = new RequestOptions({ headers: headers });
      return this._http.post(this._postUrl, JSON.stringify(depart), options)
        .map((response: Response) => response.json());
  }
  updateDepartment(value: Department) {
       console.log('in service update');
      console.log(value);
      const headers = new Headers({'Content-Type': 'application/json'});
      const options = new RequestOptions({ headers: headers });
    return this._http.put(this._putUrl + value._id, JSON.stringify(value), options)
      .map((response: Response) => response.json());

  }
  deleteDepartment(value: Department) {
     return this._http.delete(this._deleteUrl + value._id)
      .map((response: Response) => response.json());
  }
}

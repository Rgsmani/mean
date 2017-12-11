import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DynamicFormService {

private _getUrl =  "http://localhost:3000/api/dynamicforms";
  private _postUrl =  "http://localhost:3000/api/savedynamicforms";
  private _putUrl =  "http://localhost:3000/api/updatedynamicforms/";
  private _deleteUrl =  "http://localhost:3000/api/deletedynamicforms/";

 
  constructor(private _http: Http) { }

  getDynamicForm(){
    return this._http.get(this._getUrl)
    .map((response: Response) => response.json());
  }

   AddDynamicForm(value){
      console.log("inservice");
      console.log(value);
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({ headers: headers });
      return this._http.post(this._postUrl, JSON.stringify(value), options)
        .map((response: Response) => response.json());
  }

  updateDynamicForm(value){
       console.log("in service update");
      console.log(value);
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({ headers: headers });
    return this._http.put(this._putUrl + value._id, JSON.stringify(value), options)
      .map((response: Response) => response.json());
    
  }
 deleteDynamicForm(value){
     return this._http.delete(this._deleteUrl + value._id)
      .map((response: Response) => response.json());
  }
  

}

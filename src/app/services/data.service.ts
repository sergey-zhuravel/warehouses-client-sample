import { Injectable } from '@angular/core';

import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class DataService {

  //Set API url for API requests.
  //ToDo: can be moved to config file
  apiURL:string = "http://localhost:42830/api/";

  constructor(private http: Http) { }

  getAllWarehouses() {
    let data = [{
      "name":"Warehouse1",
      "id": 1,
      "categories":[{"name":"Computers", "id": 1}, {"name":"Tables", "id": 2}],
      "products":[
            {"id":1, "name":"Samsung", "category_id":1, "price":5, "count":10},
            {"id":2, "name":"HP", "category_id":1, "price":4, "count":3}
          ]
    },
    {
      "name":"Warehouse2",
      "id": 2,
      "categories":[{"name":"Computers", "id": 1}, {"name":"Tables", "id": 2}],
      "products":[
            {"id":1, "name":"Samsung", "category_id":1, "price":5, "count":10},
            {"id":2, "name":"HP", "category_id":1, "price":4, "count":3}
          ]
    }];
    //For tests without API server - uncomment mocl data return and comment request to the API.
    //return  Observable.of(data); //mock data
    return this.http.get(this.apiURL + 'warehouse')
      .map(res => res.json());
  }
}

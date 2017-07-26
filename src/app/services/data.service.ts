import { Injectable } from '@angular/core';

import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  getAllWarehouses() {
    let data = [{
      "name":"Warehouse1",
      "id": 1,
      "categories":[{"name":"Computers", "id": 1}, {"name":"Tables", "id": 2}],
      "products":[
            {"id":1, "name":"Sumsung", "category_id":1, "price":5, "count":10},
            {"id":2, "name":"HP", "category_id":1, "price":4, "count":3}
          ]
    }];
    return  Observable.of(data); //mock data
    //return this.http.get('http://localhost:3003/warehouse')
      //.map(res => res.json());
  }
}

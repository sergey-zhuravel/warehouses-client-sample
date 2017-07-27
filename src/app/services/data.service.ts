import { Injectable } from '@angular/core';

import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

import {Product} from "../models/product";
import {Category} from "../models/category";

@Injectable()
export class DataService {

  //Set API url for API requests.
  //ToDo: can be moved to config file
  apiURL:string = "http://localhost:42830/api/";

  constructor(private http: Http) { }

  //make request to the API to get all warehouses
  getAllWarehouses() {
    return this.http.get(this.apiURL + 'warehouse')
      .map(res => res.json());
  }

  //method to save one product
  //if id is 0 - it's new product, so use post
  //if id is not 0 - upate existing product in the DB
  saveProduct(product: Product) {
    let headers = new Headers();
      headers.append('Content-Type', 'application/json');
    
    if (product.ProductId === 0) {
      return this.http.post(this.apiURL + 'product', product, {headers: headers})
      .map(res => res.json());
    } else {
      return this.http.put(this.apiURL + 'product/' + product.ProductId, product, {headers: headers})
      .map(res => res.json());
    }
  }

  saveCategory(category: Category) {
    let headers = new Headers();
      headers.append('Content-Type', 'application/json');
    console.log(category);
    if (category.CategoryId === 0) {
      return this.http.post(this.apiURL + 'category', category, {headers: headers})
      .map(res => res.json());
    } else {
      return this.http.put(this.apiURL + 'category/' + category.CategoryId, category, {headers: headers})
      .map(res => res.json());
    }
  }
}

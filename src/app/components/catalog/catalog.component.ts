import { Component, OnInit } from '@angular/core';


import {DataService} from '../../services/data.service';

import {Product} from "../../models/product";
import {Category} from "../../models/category";
import {Warehouse} from '../../models/warehouse';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  warehouses: Warehouse[];
  selectedWarehouse: Warehouse;
  selectedCategory: Category;
  selectedProduct: Product;
  editMode: boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    //init state with empty array
    this.warehouses = new Array();

    //get data from the service
    this.dataService.getAllWarehouses().subscribe(data => {
      //update state with data from the service
      this.createWarehousesArray(data);
      if (this.warehouses && this.warehouses.length > 0) {
        this.selectedWarehouse = this.warehouses[0];
      }
    }, err => {
      console.log(err);
      return false;
    });
  }

  //create warehouses array from service data
  createWarehousesArray(data) {
    let warehouse: Warehouse;
    for (const wdata of data) {
        warehouse = new Warehouse(wdata);
        this.warehouses.push(warehouse);
    }
  }

  //handle inputs value change
  productChange(event) {
    this.selectedProduct.save();
  }

  addNewProduct(wid, cid) {
    this.selectedCategory = null;
    this.selectedProduct = null;
    console.log(wid, cid);
    let warehouse = this.warehouses.filter(w => w.id === wid);
    let product = new Product({name: "Product", id: 0, price: 0, count:0, category_id: cid });
    this.selectedProduct = product;
    console.log(warehouse);
  }

}

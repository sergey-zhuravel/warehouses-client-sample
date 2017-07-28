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
  newCategory: boolean = false;

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

  //handle product change saving
  productChangeSave(event) {
    this.dataService.saveProduct(this.selectedProduct).subscribe(data => console.log(data));
    this.editMode = false;
  }

  //add new product into collection to show it for editing
  addNewProduct(wid, cid) {
    this.selectedCategory = null;
    this.selectedProduct = null;
    //find warehouse  and category using warehouse id and category id
    let warehouse = this.warehouses.filter(w => w.WarehouseId === wid)[0];
    let category = new Category({CategoryId: cid, CategoryName: null, Warehouse: null});
    //create new product object
    let product = new Product({ProductName: "Product", ProductId: 0, Store: {StoreId:0, Price: 0, Count: 0}, Category: category});
    this.selectedProduct = product;
    warehouse.products.push(product);
    this.editMode = true;
  }

  //create new category object and add it to collection
  addNewCategory(wid) {
    this.selectedCategory = null;
    this.selectedProduct = null;
    let warehouse = this.warehouses.filter(w => w.WarehouseId === wid)[0];
    console.log(wid);
    this.selectedWarehouse = warehouse;
    let category = new Category({CategoryId:0, CategoryName: "NewCategory",
         Warehouse: new Warehouse({WarehouseId: warehouse.WarehouseId, WarehouseName: warehouse.WarehouseName})});
    
    this.selectedWarehouse.categories.push(category);
    this.newCategory = true;
    this.selectedCategory = category;
  }

   //save new category in DB
   saveNewCategory() {
     this.dataService.saveCategory(this.selectedCategory).subscribe(data => console.log(data));;
     this.newCategory = false;
   }


}

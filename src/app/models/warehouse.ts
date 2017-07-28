import {Product} from "./product";
import {Category} from "./category";

//warehouse model
export class Warehouse {
  WarehouseId: number;
  WarehouseName: string;
  products: Product[];  
  categories: Category[];  

  //warehouse model constructor
  constructor(warehouseInfo: any) {
    this.WarehouseName = warehouseInfo['WarehouseName'];
    this.WarehouseId = warehouseInfo['WarehouseId'];

    this.categories = new Array();
    this.products = new Array();

    //create categories
    if (warehouseInfo['Categories'] && warehouseInfo['Categories'].length) {
      for (const category of warehouseInfo['Categories']) {
          this.categories.push(new Category(Object.assign(category, {Warehouse:{WarehouseId: this.WarehouseId}})));

          //create products
          for (const product of category['Products']) {
              this.products.push(new Product(Object.assign(product, {Category: category})));
          }
      }
    }
    

    
  }
}
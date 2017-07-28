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
          let newCategory = new Category(Object.assign(category, {Warehouse:{WarehouseId: this.WarehouseId}}));
          
          let categoryTotalCost = 0;
          //create products
          for (const product of category['Products']) {
              this.products.push(new Product(Object.assign(product, {Category: category})));
              categoryTotalCost += product.Store.Price * product.Store.Count;
          }
          newCategory.TotalCost = categoryTotalCost;
          this.categories.push(newCategory);
          
      }
    }
    
  }

  //get total count of products in currect warehouse
  getTotalProductsCost() {
    let sum: number = 0;
    this.products.forEach(product => sum += product.Store.Price * product.Store.Count);
    return sum;
  }
}
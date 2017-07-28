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
          
          //create products
          for (const product of category['Products']) {
              let newProduct = new Product(Object.assign(product, {Category: category}));
              this.products.push(newProduct);
              newCategory.Products.push(newProduct);
          }
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
import {Product} from "./product";
import {Category} from "./category";

export class Warehouse {
  id: number;
  name: string;
  products: Product[];  
  categories: Category[];  

  constructor(warehouseInfo: any) {
    this.name = warehouseInfo['WarehouseName'];
    this.id = warehouseInfo['WarehouseId'];

    this.categories = new Array();
    this.products = new Array();

    //create categories
    for (const category of warehouseInfo['Categories']) {
          this.categories.push(new Category(category));

          //create products
          for (const product of category['Products']) {
              this.products.push(new Product(product, category));
          }
    }

    
  }
}
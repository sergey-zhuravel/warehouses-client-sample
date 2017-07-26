import {Product} from "./product";
import {Category} from "./category";

export class Warehouse {
  id: number;
  name: string;
  products: Product[];  
  categories: Category[];  

  constructor(warehouseInfo: any) {
    this.name = warehouseInfo['name'];
    this.id = warehouseInfo['id'];

    this.categories = new Array();
    this.products = new Array();

    //create categories
    for (const category of warehouseInfo['categories']) {
          this.categories.push(new Category(category));
    }

    //create products
    for (const product of warehouseInfo['products']) {
        console.log(product);
        this.products.push(new Product(product));
    }
  }
}
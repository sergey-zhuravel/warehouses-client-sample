import {Warehouse} from "./warehouse";
import {Product} from "./product";

interface ICategoryInfo {
    CategoryId: number;
    CategoryName: string;
    Warehouse: Warehouse;
}

//category model
export class Category {
    CategoryId: number;
    CategoryName: string;
    Warehouse: Warehouse;
    Products: Product[];

    //category model constructor
    constructor(categoryInfo: ICategoryInfo) {
        this.CategoryName = categoryInfo.CategoryName;
        this.CategoryId = categoryInfo.CategoryId;
        this.Warehouse = categoryInfo.Warehouse;
        this.Products = new Array();
    }

    //get total count of products in currect warehouse
    getTotalProductsCost() {
        let sum: number = 0;
        this.Products.forEach(product => sum += product.Store.Price * product.Store.Count);
        return sum;
    }
}
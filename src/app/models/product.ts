import {Category} from "./category";

//interface for addtional product data
interface IStore {
    StoreId: number;
    Count: number;
    Price: number;
}

//interface for product info
interface IProductInfo {
  ProductId: number;
  ProductName: string;
  Store: IStore;
  Category: Category;
}

//Product model
export class Product {
    ProductId: number;
    ProductName: string;
    Store: IStore;
    Category: Category;

    //product model constructor
    constructor(productInfo: IProductInfo) {
        this.ProductName = productInfo.ProductName;
        this.ProductId = productInfo.ProductId;
        this.Store = {StoreId: productInfo['Store'].StoreId, Price: productInfo['Store'].Price, Count: productInfo['Store'].Count};
        this.Category = productInfo.Category;
    }
}
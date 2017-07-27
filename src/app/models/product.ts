import {Category} from "./category";

interface IStore {
    StoreId: number;
    Count: number;
    Price: number;
}

export class Product {
    ProductId: number;
    ProductName: string;
    Store: IStore;
    Category: Category;

    constructor(productInfo: any, category: Category) {
        this.ProductName = productInfo.ProductName;
        this.ProductId = productInfo.ProductId;
        this.Store = {StoreId: productInfo['Store'].StoreId, Price: productInfo['Store'].Price, Count: productInfo['Store'].Count};
        this.Category = category;
    }
}
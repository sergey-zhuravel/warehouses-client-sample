import {Warehouse} from "./warehouse";

export class Category {
    CategoryId: number;
    CategoryName: string;
    Warehouse: Warehouse;

    constructor(categoryInfo: any) {
        this.CategoryName = categoryInfo.CategoryName;
        this.CategoryId = categoryInfo.CategoryId;
        this.Warehouse = categoryInfo.Warehouse;
    }
}
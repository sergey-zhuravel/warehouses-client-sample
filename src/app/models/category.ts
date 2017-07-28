import {Warehouse} from "./warehouse";

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
    TotalCost: number;

    //category model constructor
    constructor(categoryInfo: ICategoryInfo) {
        this.CategoryName = categoryInfo.CategoryName;
        this.CategoryId = categoryInfo.CategoryId;
        this.Warehouse = categoryInfo.Warehouse;
        this.TotalCost = 0;
    }
}
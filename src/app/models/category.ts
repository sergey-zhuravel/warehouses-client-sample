export class Category {
    CategoryId: number;
    CategoryName: string;

    constructor(categoryInfo: any) {
        this.CategoryName = categoryInfo.CategoryName;
        this.CategoryId = categoryInfo.CategoryId;
    }
    save(warehouseid) {
        //ToDo: implemented http request to save product
        console.log(this.CategoryName);
    }
}
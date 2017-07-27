export class Category {
    id: number;
    name: string;

    constructor(categoryInfo: any) {
        this.name = categoryInfo.name;
        this.id = categoryInfo.id;
    }
    save(warehouseid) {
        //ToDo: implemented http request to save product
        console.log(this.name);
    }
}
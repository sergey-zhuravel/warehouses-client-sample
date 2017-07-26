import {Category} from "./category";

export class Product {
    id: number;
    name: string;
    price: number;
    count: number;
    category_id: number;

    constructor(productInfo: any) {
        this.name = productInfo.name;
        this.id = productInfo.id;
        this.price = productInfo.price;
        this.count = productInfo.count;
        this.category_id = productInfo.category_id;
    }

    save() {
        //ToDo: implement http request to save product
        console.log(this.name, this.price, this.count);
    }
}
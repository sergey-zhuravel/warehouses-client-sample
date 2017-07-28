import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Product} from "../../models/product";
import {Category} from "../../models/category";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Input() selected: Product;
  @Input() index: number;
  @Output() selectedChange: EventEmitter<Product> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  //onProductClick() {
  //  this.product.Category = new Category({CategoryId: this.product.Category.CategoryId, CategoryName: null, Warehouse: null});
  //  this.selectedChange.next(this.product);
  //}

}

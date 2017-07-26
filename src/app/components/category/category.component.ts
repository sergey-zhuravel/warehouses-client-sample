import { Component, OnInit, Input } from '@angular/core';
import {Category} from "../../models/category";
import {Product} from "../../models/product";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @Input() category: Category;
  @Input() products: Product[];
  constructor() { }

  ngOnInit() {
  }

}

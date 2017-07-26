import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Input() selected: Category;
  @Output() selectedChange: EventEmitter<Category> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}

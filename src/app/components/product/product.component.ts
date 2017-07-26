import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Product} from "../../models/product";


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

}

import { Component, OnInit } from '@angular/core';

import { ProductService } from '../services/product.service';

import { Observable } from 'rxjs';

import { Product } from '../product/product.interface';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'productId', 'name', 'description', 'category', 'price'];
  products: Observable<Product[]>;

  constructor(private readonly productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

}

import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { switchMap, map } from "rxjs/operators";

import { Product } from '../product/product.interface';

@Component({
  selector: 'app-product-grid-list',
  templateUrl: './product-grid-list.component.html',
  styleUrls: ['./product-grid-list.component.scss']
})
export class ProductGridListComponent implements OnInit {

  productsCollection: AngularFirestoreCollection<Product>;
  products: Observable<Product[]>;
  productsQuery: any;

  constructor(private readonly afs: AngularFirestore) {
    this.productsCollection = afs.collection<Product>('products');
    this.products = this.productsCollection.valueChanges();
    this.products = this.products.pipe(
      map(products => products.sort(this.sortByProductId))
    );

  }
  sortByName(a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }

  sortByProductId(a, b) {
    if (a.productId < b.productId) {
      return -1;
    }
    if (a.productId > b.productId) {
      return 1;
    }
    return 0;
  }

  ngOnInit() {
  }

}

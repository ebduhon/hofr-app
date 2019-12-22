import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Product } from '../product/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productsCollection: AngularFirestoreCollection<Product>;
  products: Observable<Product[]>;

  constructor(private readonly afs: AngularFirestore) {
    this.productsCollection = afs.collection<Product>('products');
  }

  getProducts() {
    return this.products = this.productsCollection.valueChanges();
  }
}

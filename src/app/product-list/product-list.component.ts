import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Product { id: string; name: string; }

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productsCollection: AngularFirestoreCollection<Product>;
  products: Observable<Product[]>;

  constructor(private readonly afs: AngularFirestore) {
    this.productsCollection = afs.collection<Product>('products');
    this.products = this.productsCollection.valueChanges();
  }

  ngOnInit() {
    console.log('ngOnInit product-list');
  }

  createProduct(name: string) {
    const id = this.afs.createId();
    const product: Product = { id, name };

    this.productsCollection.doc(id).set(product);
  }

  deleteProduct(productId: string) {
    console.log(productId);
    this.productsCollection.doc(productId).delete();
  }

}

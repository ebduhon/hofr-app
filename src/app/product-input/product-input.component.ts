import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Product } from '../product/product.interface';

@Component({
  selector: 'app-product-input',
  templateUrl: './product-input.component.html',
  styleUrls: ['./product-input.component.scss']
})
export class ProductInputComponent implements OnInit {

  productsCollection: AngularFirestoreCollection<Product>;

  constructor(private readonly afs: AngularFirestore) {
    this.productsCollection = afs.collection<Product>('products');
  }

  ngOnInit() {
    console.log('ngOnInit product-input');
  }

  addProduct(name: string) {
    if (name) {
      const id = this.afs.createId();
      const product: Product = { id, name };

      this.productsCollection.doc(id).set(product);
    }
  }
}
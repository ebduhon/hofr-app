import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { switchMap } from "rxjs/operators";

import { Product } from '../product/product.interface';

@Component({
  selector: 'app-product-grid-list',
  templateUrl: './product-grid-list.component.html',
  styleUrls: ['./product-grid-list.component.scss']
})
export class ProductGridListComponent implements OnInit {

  constructor(private readonly afs: AngularFirestore) {

  }

  ngOnInit() {
  }

}

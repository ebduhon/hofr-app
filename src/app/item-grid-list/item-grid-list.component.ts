import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Item } from '../item/item.interface';

@Component({
  selector: 'app-item-grid-list',
  templateUrl: './item-grid-list.component.html',
  styleUrls: ['./item-grid-list.component.scss']
})
export class ItemGridListComponent implements OnInit {
  items$: any;
  sizeFilter$: BehaviorSubject<string|null>;
  colorFilter$: BehaviorSubject<string|null>;

  constructor(private readonly afs: AngularFirestore) {
    this.sizeFilter$ = new BehaviorSubject(null);
    this.colorFilter$ = new BehaviorSubject(null);
    this.items$ = combineLatest(
      this.sizeFilter$,
      this.colorFilter$
    ).pipe(
      switchMap(([size, color]) =>
        afs.collection('items', ref => {
          let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
          if (size) { query = query.where('size', '==', size) };
          if (color) { query = query.where('color', '==', color) };
          return query;
        }).valueChanges()
      )
    );
  }

  filterBySize(size: string|null) {
    this.sizeFilter$.next(size);
  }

  filterByColor(color: string|null) {
    this.colorFilter$.next(color);
  }

  ngOnInit() {
  }

}

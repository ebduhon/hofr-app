import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, state, animate, style, transition } from '@angular/animations';
import { RouterModule, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';


import { StoreModule } from '@ngrx/store';
import { counterReducer } from '../counter/counter.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { MyCounterComponent } from './my-counter/my-counter.component';

import { environment } from '../environments/environment';
export const firebaseConfig = environment.firebase['houseoffourroses'];


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    StoreModule.forRoot({ count: counterReducer }),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    MyCounterComponent,
    ProductListComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

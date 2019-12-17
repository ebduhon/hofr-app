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
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';


import { StoreModule } from '@ngrx/store';
import { counterReducer } from '../counter/counter.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductGridListComponent } from './product-grid-list/product-grid-list.component';
import { ProductInputComponent } from './product-input/product-input.component';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { ItemGridListComponent } from './item-grid-list/item-grid-list.component';

import { DropzoneDirective } from './dropzone.directive';
import { UploaderComponent } from './uploader/uploader.component';
import { UploadTaskComponent } from './upload-task/upload-task.component';

import { DashboardComponent } from './dashboard/dashboard.component';

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
    MatInputModule,
    MatListModule,
    MatGridListModule,
    MatIconModule,
    StoreModule.forRoot({ count: counterReducer }),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    MyCounterComponent,
    ProductListComponent,
    ProductGridListComponent,
    ProductInputComponent,
    ItemGridListComponent,
    DropzoneDirective,
    UploaderComponent,
    UploadTaskComponent,
    DashboardComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

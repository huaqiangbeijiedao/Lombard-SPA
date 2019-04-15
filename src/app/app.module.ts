import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { NavComponent } from './nav/nav.component';
import { HttpClientModule } from '@angular/common/http';


import { ProductTableComponent } from './productTable/productTable.component';
import { UpdateProductComponent } from './updateProduct/updateProduct.component';


@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      ProductTableComponent,
      UpdateProductComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      NgbModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { NavComponent } from './nav/nav.component';
import { AddProductFormComponent } from './addProductForm/addProductForm.component';
import { AddTransactionComponent } from './AddTransaction/AddTransaction.component';

=======
import { FormsModule } from '@angular/forms';

import { NavComponent } from './nav/nav.component';
import { HttpClientModule } from '@angular/common/http';


import { ProductTableComponent } from './productTable/productTable.component';
import { UpdateProductComponent } from './updateProduct/updateProduct.component';
>>>>>>> 4210c238d31727be12d5032f53046a6e57b443a8


@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
<<<<<<< HEAD
      AddProductFormComponent,
      NavComponent,
      AddTransactionComponent,
=======
      ProductTableComponent,
      UpdateProductComponent
>>>>>>> 4210c238d31727be12d5032f53046a6e57b443a8
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
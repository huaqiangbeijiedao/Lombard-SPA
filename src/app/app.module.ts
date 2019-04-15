import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavComponent } from './nav/nav.component';

import { AddProductFormComponent } from './addProductForm/addProductForm.component';
import { AddTransactionComponent } from './AddTransaction/AddTransaction.component';



@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      AddProductFormComponent,
      NavComponent,
      AddTransactionComponent,
      AddTransactionComponent,
      AddTransactionComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      NgbModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
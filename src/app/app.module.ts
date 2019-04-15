import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { NavComponent } from './nav/nav.component';
=======
import { ProductComponent } from './Product/Product.component';
>>>>>>> bb930e4e023bc81ecedb0cf8f61fa8aa01cf0985


@NgModule({
   declarations: [
      AppComponent,
<<<<<<< HEAD
      NavComponent
=======
      ProductComponent
>>>>>>> bb930e4e023bc81ecedb0cf8f61fa8aa01cf0985
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

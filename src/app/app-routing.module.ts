import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateProductComponent } from "./updateProduct/updateProduct.component";
import { ProductTableComponent } from "./productTable/productTable.component";
import { TransactionTableComponent } from './TransactionTable/TransactionTable.component';

const routes: Routes = [
  {path: "update", component:UpdateProductComponent },
  { path: "list", component: ProductTableComponent},
  { path: "showtransations", component: TransactionTableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

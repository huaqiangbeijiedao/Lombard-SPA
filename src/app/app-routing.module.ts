import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateProductComponent } from "./updateProduct/updateProduct.component";
import { ProductTableComponent } from "./productTable/productTable.component";
<<<<<<< HEAD
import { OutageComponent } from "./Outage/Outage.component";
=======
>>>>>>> fb907e31dc22c425540458251d7d5ee221db25e7
import { TransactionTableComponent } from './TransactionTable/TransactionTable.component';

const routes: Routes = [
  {path: "update", component:UpdateProductComponent },
  { path: "list", component: ProductTableComponent},
  { path: "showtransations", component: TransactionTableComponent},
  {path: "outage", component: OutageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

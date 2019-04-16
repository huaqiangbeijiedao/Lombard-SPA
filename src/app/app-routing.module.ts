import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductTableComponent } from "./productTable/productTable.component";
import { OutageComponent } from "./Outage/Outage.component";
import { TransactionTableComponent } from './TransactionTable/TransactionTable.component';

const routes: Routes = [
  { path: "list", component: ProductTableComponent},
  { path: "showtransations", component: TransactionTableComponent},
  {path: "outage", component: OutageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

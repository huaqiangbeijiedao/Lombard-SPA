import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "./app.component";
import { UpdateProductComponent } from "./updateProduct/updateProduct.component";
import { ProductTableComponent } from "./productTable/productTable.component";

const routes: Routes = [
  {path: "update", component:UpdateProductComponent },
  { path: "list", component: ProductTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

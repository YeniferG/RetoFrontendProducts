import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductsComponent } from "./list-products/list-products.component";
import { BuyComponent } from './buy/buy/buy.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: "products",
    pathMatch: "full"
  },
  {
    path: "",
    children: [
      { path: "products", component: ListProductsComponent },
      { path: "buy", component: BuyComponent },
      ],
  },
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

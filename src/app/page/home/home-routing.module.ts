import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductsComponent } from "./list-products/list-products.component";
import { BuyComponent } from './buy/buy/buy.component';
import { BuyInformationClientFormComponent } from './buy-information-client.form/buy-information-client.form.component';

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
      { path: "informationclient", component: BuyInformationClientFormComponent },
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

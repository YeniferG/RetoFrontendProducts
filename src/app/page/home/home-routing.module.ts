import { ProductManagementComponent } from './../administrator/product-management/product-management.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyInformationClientFormComponent } from '../user/buy-information-client.form/buy-information-client.form.component';
import { BuyComponent } from '../user/buy/buy.component';
import { ListProductsComponent } from '../user/list-products/list-products.component';
import { RolesComponent } from './roles/roles.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: "roles",
    pathMatch: "full"
  },
  {
    path: "",
    children: [
      {path: "roles", component: RolesComponent},
      { path: "products", component: ListProductsComponent },
      { path: "buy", component: BuyComponent },
      { path: "informationclient", component: BuyInformationClientFormComponent },
      { path: "productManagement", component: ProductManagementComponent },
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

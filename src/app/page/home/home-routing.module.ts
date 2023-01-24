import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductsComponent } from "./list-products/list-products.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: "cats",
    pathMatch: "full"
  },
  {
    path: "",
    children: [
      { path: "cats", component: ListProductsComponent },
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

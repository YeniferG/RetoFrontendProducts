import { ProductManagementComponent } from './../administrator/product-management/product-management.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ListProductsComponent } from "../user/list-products/list-products.component";
import { HomeRoutingModule } from './home-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BuyComponent } from '../user/buy/buy.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BuyInformationClientFormComponent } from '../user/buy-information-client.form/buy-information-client.form.component';
import { AdministratorModule } from "../administrator/administrator.module";
import { AddProductComponent } from "../../modals/add-product/add-product.component";



@NgModule({
    declarations: [
        NavbarComponent,
        CarouselComponent,
        ListProductsComponent,
        BuyComponent,
        BuyInformationClientFormComponent,
        ProductManagementComponent,
    ],
    exports: [
        NavbarComponent,
        CarouselComponent,
        ListProductsComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        HomeRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        AdministratorModule
    ]
})
export class HomeModule { }

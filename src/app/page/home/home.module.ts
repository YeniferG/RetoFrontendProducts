import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ListProductsComponent } from "./list-products/list-products.component";
import { HomeRoutingModule } from './home-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BuyComponent } from './buy/buy/buy.component';
import { BuyInformationClientFormComponent } from './buy-information-client.form/buy-information-client.form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NavbarComponent,
    CarouselComponent,
    ListProductsComponent,
    BuyComponent,
    BuyInformationClientFormComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    NavbarComponent,
    CarouselComponent,
    ListProductsComponent
  ]
})
export class HomeModule { }

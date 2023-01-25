import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ListProductsComponent } from "./list-products/list-products.component";
import { HomeRoutingModule } from './home-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BuyComponent } from './buy/buy/buy.component';



@NgModule({
  declarations: [
    NavbarComponent,
    CarouselComponent,
    ListProductsComponent,
    BuyComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    HomeRoutingModule
  ],
  exports: [
    NavbarComponent,
    CarouselComponent,
    ListProductsComponent
  ]
})
export class HomeModule { }

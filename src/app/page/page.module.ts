import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './home/navbar/navbar.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { ListProductsComponent } from "./home/list-products/list-products.component";
import { HttpClientModule } from '@angular/common/http';
import { HomeRoutingModule } from './home/home-routing.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,   
    HttpClientModule,
    HomeRoutingModule
  ],
})
export class PageModule { }

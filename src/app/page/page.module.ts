import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HomeRoutingModule } from './home/home-routing.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,   
    HttpClientModule,
    HomeRoutingModule,
  ],
})
export class PageModule { }

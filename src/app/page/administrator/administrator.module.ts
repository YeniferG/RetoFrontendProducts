import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarAdministradorComponent } from './navbar-administrador/navbar-administrador/navbar-administrador.component';
import { RouterModule } from '@angular/router';
import { AddProductComponent } from 'src/app/modals/add-product/add-product.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [NavbarAdministradorComponent, AddProductComponent],
  exports: [
    NavbarAdministradorComponent,
    AddProductComponent
  ]
})
export class AdministratorModule { }

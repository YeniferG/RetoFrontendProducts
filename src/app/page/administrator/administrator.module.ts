import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarAdministradorComponent } from './navbar-administrador/navbar-administrador/navbar-administrador.component';
import { RouterModule } from '@angular/router';
import { AddProductComponent } from 'src/app/modals/add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditProductComponent } from 'src/app/modals/edit-product/edit-product.component';

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  declarations: [NavbarAdministradorComponent, AddProductComponent, EditProductComponent],
  exports: [NavbarAdministradorComponent, AddProductComponent, EditProductComponent],
})
export class AdministratorModule {}

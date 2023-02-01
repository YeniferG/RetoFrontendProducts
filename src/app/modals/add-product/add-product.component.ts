import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/model-interface/product';
import { ProductsApiService } from 'src/app/service/products/products-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  nameProduct?: string;
  inventory?: number;
  min?: number;
  max?: number;
  enabled?: boolean;

  constructor(
    private router: Router,
    private productsApiService: ProductsApiService,
  ) {}

  formRegisterProduct = new FormGroup({
    nameProduct: new FormControl(''),
    inventory: new FormControl(''),
    min: new FormControl(''),
    max: new FormControl(''),
    enabled: new FormControl(false)
  });

  ngOnInit(): void {
    this.startFormReactive();
  }

  goBack(){
    this.router.navigate(['home/productManagement'])
  }

  startFormReactive() {
    this.formRegisterProduct.valueChanges.subscribe((value: any) => {

      if (value.nameProduct != null) {
        this.nameProduct = value.nameProduct;
      }

      if (value.inventory != null) {
        this.inventory = value.inventory;
      }

      if (value.min != null) {
        this.min = value.min;
      }

      if (value.max != null) {
        this.max = value.max;
      }

      if (value.enabled != null) {
        this.enabled = value.enabled;
      }
    });
  }

  onSubmit() {

    let product: Product = {
      name: this.formRegisterProduct.value.nameProduct || '',
      inventory: parseInt(this.formRegisterProduct.value.inventory!) || 0,
      enabled: this.formRegisterProduct.value.enabled || false,
      min: parseInt(this.formRegisterProduct.value.min!) || 0,
      max: parseInt(this.formRegisterProduct.value.max!) || 0
    };

    if (
      !this.formRegisterProduct.value.nameProduct ||
      !this.formRegisterProduct.value.inventory ||
      !this.formRegisterProduct.value.min ||
      !this.formRegisterProduct.value.max
    ) {
      Swal.fire(
        '¡Ups, todos los campos deben estar diligenciados!',
        '',
        'error'
      );
    } else {
      this.productsApiService
        .addProduct(product)
        .subscribe((res) =>
          Swal.fire(
            '¡Producto agregado con exito!',
            'Producto '.concat(this.formRegisterProduct.value.nameProduct!),
            'success'
          ).then((res) => this.router.navigate(['home/productManagement']))
        );
    }
  }

}

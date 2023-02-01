import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/model-interface/product';
import { ProductsApiService } from 'src/app/service/products/products-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  nameProduct!: string;
  inventory!: number;
  min!: number;
  max!: number;
  enabled!: boolean;
  product!: Product;
  formEditProduct!: FormGroup;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private productsApiService: ProductsApiService
  ) {}

  ngOnInit(): void {
    this.getProductById();
  }

  getProductById() {
    this.productsApiService
      .getProductsById(this.productsApiService.productInEdition?.id!)
      .subscribe((user) => {
        this.product = user ? user : this.product;        
        this.startFormReactive();
      });
  }

  goBack() {
    this.router.navigate(['home/productManagement']);
  }

  startFormReactive() {
    console.log(this.product?.name);
    
    this.formEditProduct = this.formBuilder.group({
      nameProduct: this.product?.name || '',
      inventory: this.product?.inventory || '',
      enabled: this.product?.enabled || false,
      min: this.product?.min || '',
      max: this.product?.max || ''
    });

    this.formEditProduct.valueChanges.subscribe(
      (value: any) => {
      console.log('Valor resivido: ', value);

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
    }
    );
  }

  onSubmit() {
    let product: Product = {
      id: this.product?.id,
      name: this.formEditProduct.value.nameProduct || this.product?.name,
      inventory:
        this.formEditProduct.value.inventory || this.product?.inventory,
      enabled: this.formEditProduct.value.enabled || this.product?.enabled,
      min: this.formEditProduct.value.min! || this.product?.min,
      max: this.formEditProduct.value.max! || this.product?.max,
    };

    if (
      !this.formEditProduct.value.nameProduct ||
      !this.formEditProduct.value.inventory ||
      !this.formEditProduct.value.min ||
      !this.formEditProduct.value.max
    ) {
      Swal.fire(
        '¡Ups, todos los campos deben estar diligenciados!',
        '',
        'error'
      );
    } else {
      this.productsApiService
        .updateProduct(product.id!, product)
        .subscribe((res) =>
          Swal.fire(
            '¡Producto actualizado con exito!',
            'Producto '.concat(this.formEditProduct.value.nameProduct),
            'success'
          ).then((res) => this.router.navigate(['home/productManagement']))
        );
    }
  }
}

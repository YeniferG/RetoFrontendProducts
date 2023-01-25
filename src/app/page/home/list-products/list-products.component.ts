import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../service/model-interface/product';
import Swal from 'sweetalert2';
import { ProductsApiService } from '../service/products/products-api.service';
import { faker } from '@faker-js/faker';
import { ProductInfo } from '../service/model-interface/product-info';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
})
export class ListProductsComponent {
  products: Product[] = [];
  constructor(
    private productsApiService: ProductsApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productsApiService.getProducts().subscribe((getproducts) => {
      this.products = getproducts;
      this.products.map((product) => {
        product.imageUrl = faker.image.food(640, 480, true);
      });
    });
  }

  startButton($event: any, inputValue: string) {
    const element = $event.target.id;
    console.log($event.target);

    Swal.fire({
      title: '¿Desea agregar el producto?',
      showDenyButton: true,
      confirmButtonText: 'Agregar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        console.log(this.productsApiService.listProductInfo);

        let productI = this.productsApiService.listProductInfo.find(
          (productInfo) => {
            return productInfo.idProduct === element;
          }
        );

        !productI
          ? this.productsApiService.listProductInfo.push({
              idProduct: element,
              quantity: parseInt(inputValue),
            })
          : (this.productsApiService.listProductInfo =
              this.productsApiService.listProductInfo.map(
                (list: ProductInfo) => {
                  if (list.idProduct === element) {
                    return {
                      idProduct: element,
                      quantity: parseInt(inputValue) + list.quantity,
                    };
                  }
                  return list;
                }
              ));

        Swal.fire('Saved!', '', 'success');
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    });
  }
}

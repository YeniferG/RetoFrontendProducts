import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../service/model-interface/product';
import { ProductsCatsApiService } from '../service/products-cats/products-cats-api.service'; 
import Swal from 'sweetalert2';
import { ProductsApiService } from '../service/products/products-api.service';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent {
  products: Product[] = [];

  constructor(private productsApiService: ProductsApiService, private router: Router) { }


  ngOnInit(): void {
    this.addAllProducts();
  }

  addAllProducts() {
    this.productsApiService.getProducts()
      .subscribe((getproducts) => {
        this.products = getproducts
        this.products.map(product => {
          product.imageUrl = faker.image.food(640, 480, true);
        })
      });
  }

  startButton($event: any) {
    const element = $event.target.id;
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsApiService } from '../../service/products/products-api.service';
import { Product } from '../../service/model-interface/product';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css'],
})
export class BuyComponent {
  listProducts: Product[] = [];

  constructor(
    private productsApiService: ProductsApiService,
    private router: Router
  ) {  }

  ngOnInit(): void{
    this.listProductsForBuy();
  }

  closeBuy() {
    this.router.navigate(['home/products']);
  }

  listProductsForBuy() {
   this.productsApiService.listProductInfo.map((producInfo) => {
      this.productsApiService
        .getProductsById(producInfo.idProduct)
        .subscribe((product) => this.listProducts.push(product));
    });
  }

  getQuantityById(id: string){
    var quantity =  this.productsApiService.getQuantityById(id);
    console.log("La cantidad de productos por id es de", quantity);
    return quantity;
  }
}

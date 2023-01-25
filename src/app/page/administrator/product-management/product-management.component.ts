import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/model-interface/product';
import { ProductsApiService } from 'src/app/service/products/products-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css'],
})
export class ProductManagementComponent implements OnInit {
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
    });
  }

  onDelete(id: string) {
    Swal.fire({
      title: '¿Esta seguro que desea eliminar el producto?',
      showDenyButton: true,
      confirmButtonText: 'Aceptar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.productsApiService.deleteProduct(id).subscribe();
        Swal.fire('Eliminado con exito!', '', 'success');
        this.getAllProducts();
      }
    });
  }

  onEdit(){
    
  }
}

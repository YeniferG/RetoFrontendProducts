import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Buy } from 'src/app/interfaces/model-interface/buy';
import { BuysApiService } from 'src/app/service/buys/buys-api.service';
import { ProductsApiService } from 'src/app/service/products/products-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-buy-information-client.form',
  templateUrl: './buy-information-client.form.component.html',
  styleUrls: ['./buy-information-client.form.component.css'],
})
export class BuyInformationClientFormComponent implements OnInit {
  documentTypeClient?: string;
  documentNumberClient?: number;
  nameClient?: string;

  constructor(
    private router: Router,
    private productsApiService: ProductsApiService,
    private buyApiService: BuysApiService
  ) {}

  formRegisterClient = new FormGroup({
    documentType: new FormControl(''),
    documentValue: new FormControl(''),
    nameClient: new FormControl(''),
  });

  ngOnInit(): void {
    this.startFormReactive();
  }

  startFormReactive() {
    this.formRegisterClient.valueChanges.subscribe((value: any) => {
      console.log('Valor resivido: ', value);

      if (value.documentType != null) {
        this.documentTypeClient = value.documentType;
      }

      if (value.documentValue != null) {
        this.documentNumberClient = value.documentValue;
      }

      if (value.nameClient != null) {
        this.nameClient = value.nameClient;
      }
    });
  }

  onSubmit() {
    console.log('Formulario', this.formRegisterClient.value);

    if (this.formRegisterClient.value.documentValue != null) {
      this.documentNumberClient = parseInt(
        this.formRegisterClient.value.documentValue!
      );
    } else {
      this.documentNumberClient = 0;
    }

    let buy: Buy = {
      clientTypeDocument: this.formRegisterClient.value.documentType || '',
      clientIdentification: this.documentNumberClient!,
      clientName: this.formRegisterClient.value.nameClient || '',
      products: this.productsApiService.listProductInfo,
    };

    if (
      !this.formRegisterClient.value.documentType ||
      !this.formRegisterClient.value.documentValue ||
      !this.formRegisterClient.value.nameClient
    ) {
      Swal.fire(
        '¡Ups, todos los campos deben estar diligenciados!',
        '',
        'error'
      );
    } else {
      this.buyApiService
        .saveBuy(buy)
        .subscribe((res) =>
          Swal.fire(
            '¡Felicidades por su compra!',
            'Gracias '.concat(this.formRegisterClient.value.nameClient!),
            'success'
          ).then((res) => this.router.navigate(['home/produts']))
        );
    }
  }
}

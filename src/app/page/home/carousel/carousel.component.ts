import { Component, OnInit, Input } from '@angular/core';
import { ICarouselItem } from './icarousel-items.metadata';
import { Product } from '../../../interfaces/model-interface/product';
import { ProductsApiService } from '../../../service/products/products-api.service';
import { faker } from "@faker-js/faker";
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  /**
   * Custom Properties
   */
  @Input() height = 500;
  @Input() isFullScreen = false;
  @Input() items: ICarouselItem[] = [];

  newItem: ICarouselItem = {
    id: '',
    title: {
      first: '',
      second: '',
    },
    subtitle: '',
    link: '',
    image: '',
    order: 0,
    marginLeft: 0,
    position: 0,
  };

  /**
   * final Propertis
   */
  public finalHeight: string | number = 0;
  public currentPosition: number = 0;

  constructor(private productsApiService: ProductsApiService) {
    this.finalHeight = this.isFullScreen ? '100vh' : `${this.height}px`;
  }

  contador = 0;

  addAllProducts() {
    this.productsApiService.getProducts().subscribe((getproducts) => {
      let a: ICarouselItem[] = getproducts.map((product: Product): ICarouselItem => {
        return {
          id: product.id,
          title: {
            first: product.name,
            second: product.min+""
          },
          subtitle: product.name,
          link: '/',
          image: faker.image.food(640, 480, true),
          order: 0,
          marginLeft: 0,
          position: this.contador++,
        };
      });
      console.log('Test Yenifer' + this.newItem.id);
      this.items = a;

      console.log(this.items);
    });
  }

  ngOnInit(): void {
    this.addAllProducts();
  }

  setCurrentPosition(position: any): void {
    this.currentPosition = position;
    this.items.find((item) => item.position === 0)!.marginLeft = -100 * position;
  }

  setNext() {
    let finalPercentage = 0;
    let nextPosition = this.currentPosition + 1;
    if (nextPosition <= this.items.length - 1) {
      finalPercentage = -100 * nextPosition;
    } else {
      nextPosition = 0;
    }

    console.log(this.items);
    let item = this.items.find((item) => item.position === 0);
    if (item != undefined) {
      console.log(item.id);
      item.marginLeft = finalPercentage;
    } else {
      console.log(item + 'error');
    }
    // .marginLeft = finalPercentage;
    this.currentPosition = nextPosition;
  }

  setBack() {
    let finalPercentage = 0;
    let backPosition = this.currentPosition - 1;
    if (backPosition < 0) {
      backPosition = this.items.length - 1;
    }
    finalPercentage = -100 * backPosition;
    this.items.find((item) => item.position === 0)!.marginLeft = finalPercentage;
    this.currentPosition = backPosition;
  }
}

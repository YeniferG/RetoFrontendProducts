import { TestBed } from '@angular/core/testing';

import { ProductsFashionApiService } from './products-fashion-api.service';

describe('ProductsFashionApiService', () => {
  let service: ProductsFashionApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsFashionApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
